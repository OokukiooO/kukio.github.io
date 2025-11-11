interface Project {
  title: string
  description: string
  imgSrc?: string
  detail?: string
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   detail: 'This project is about creating a search engine like Google.',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   detail: 'This project involves building a time machine.',
  // },
  {
    title: '虚拟试衣系统 | 已交付（2025）',
    description:
      '前端 React 18 + Redux Toolkit；后端 Flask-RESTful + JWT；WebSocket 实时通信，Axios 异步交互；React Virtualized 优化长列表渲染。',
    imgSrc: '/static/images/projects/virtual-try-on.jpg',
  },
  {
    title: '课堂识别系统 | 已交付（2024.12）',
    description:
      'Next.js 14 构建 SSR + Tailwind CSS；Grafana 9 对接 MongoDB 做数据可视化；Skeleton Loading 优化首屏 FCP≈1.2s；React Query 管理服务端状态。',
  },
  {
    title: '视频3D建模系统（映刻万像） | 一期交付/二期开发中（2024.10-至今）',
    description:
      'Ant Design Pro 构建中台与 Keyframe 动画；Express 实现 RESTful API；3DGS 算法完成视频帧建模与 Python 自动化处理；Redis 缓存热点数据（响应<200ms）；JWT+RBAC 权限体系与多租户隔离。',
    imgSrc: '/static/images/projects/3d-modeling.jpg',
  },
  {
    title: '微信 AI 客服系统 | 已中止（2025.3）',
    description:
      '与华南理工大学本科团队合作；TypeScript 封装接口对接 SCF 云函数；接入 GitHub Actions 实时更新；编写 Dockerfile 并打包部署至服务器。',
  },
  {
    title: '电影票房管理系统 | 开发中（2025.5-2025.7）',
    description:
      '票房数据管理与可视化后台；计划采用 Next.js + Ant Design + ECharts，支持多维度检索与导出。',
    imgSrc: '/static/images/projects/movie-box-office.jpg',
  },
]

export default projectsData
