const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

/**
 * 说明：GitHub Pages 的项目页会部署在 https://<user>.github.io/<repo>/
 * 如果未设置 BASE_PATH，这里在 GitHub Actions 环境下自动根据仓库名推断 basePath。
 * 用户主页仓库（<user>.github.io）则不需要 basePath。
 */
const [__owner = '', __repo = ''] = (process.env.GITHUB_REPOSITORY || '').split('/')
const __isUserSiteRepo = __repo && __owner && __repo.toLowerCase() === `${__owner.toLowerCase()}.github.io`

// 使用环境变量控制，示例：
// 用户主页仓库 -> 不设置 BASE_PATH
// 项目页仓库(例如 repo = kukio.github.io) -> BASE_PATH=/kukio.github.io
let basePath = process.env.BASE_PATH
if (typeof basePath !== 'string') {
  // 未显式设置 BASE_PATH 时：如果是项目页仓库，默认使用仓库名作为 basePath；否则置空
  basePath = !__isUserSiteRepo && __repo ? `/${__repo}` : ''
}
// 规范化：去掉多余的斜杠；若仅为'/'则置空
basePath = (basePath || '').replace(/\s+/g, '')
basePath = basePath === '/' ? '' : `/${basePath.replace(/^\/+|\/+$|\s+/g, '')}`.replace(/^\/$/, '')

module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]

  return plugins.reduce((acc, next) => next(acc), {
    output,
    reactStrictMode: true,
    trailingSlash: false,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
      // 构建时忽略 ESLint/Prettier 报错，避免部署失败
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [{ protocol: 'https', hostname: 'picsum.photos' }],
      unoptimized,
    },
    // 仅当是项目页才设置 basePath/assetPrefix
    ...(basePath
      ? {
          basePath,
          assetPrefix: basePath,
        }
      : {}),
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
}
