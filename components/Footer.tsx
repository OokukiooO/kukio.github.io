/*
 * @Description:
 * @Date: 2025-08-07 19:10:17
 * @LastEditTime: 2025-08-07 19:59:07
 * @FilePath: \kukio.github.io\components\Footer.tsx
 */

import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href="mailto:fan2487373152@gmail.com" size={6} />
          <SocialIcon kind="github" href="https://github.com/OokukiooO" size={6} />
          <SocialIcon kind="linkedin" href="www.linkedin.com/in/i-magination-a63b08343" size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Fan Pu</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">Kukio's Blog</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
