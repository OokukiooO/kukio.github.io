'use client'

// export { metadata } from './metadata.ts'

import { useState } from 'react'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  // 示例数据格式：
  // const projectsData = [
  //   {
  //     title: '项目A',
  //     description: '这是项目A的简要描述。',
  //     imgSrc: '/static/images/project-a.png',
  //     detail: `123项目A的详细信息。这里可以包含更多关于项目的背景、技术栈、功能特点等内容。\n\n- 技术栈：React, Node.js, MongoDB\n- 功能：用户认证、数据可视化、实时通知等\n\n更多信息请访问 [项目A官网](https://example.com/project-a)`,
  //   },
  //   {
  //     title: '项目B',
  //     description: '这是项目B的简要描述。',
  //     imgSrc: '/static/images/project-b.png',
  //     detail: `项目B的详细信息。这里可以包含更多关于项目的背景、技术栈、功能特点等内容。\n\n- 技术栈：Vue.js, Express, MySQL\n- 功能：内容管理、用户评论、数据分析等\n\n更多信息请访问 [项目B官网](https://example.com/project-b)`,
  //   },
  // ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            项目日志
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {/* Showcase your projects with a hero image (16 x 9) */}
            近期的项目日志
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap justify-center gap-y-8">
            {projectsData.map((d, idx) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                onDetailClick={() => setOpenIdx(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      {openIdx !== null && (
        <div
          className="animate-scale-in fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          role="dialog"
          tabIndex={-1}
          onClick={() => setOpenIdx(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpenIdx(null)
          }}
        >
          <div
            className="animate-scale-in relative mx-4 w-full max-w-lg rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-950"
            style={{
              animation: 'scaleIn 0.3s cubic-bezier(.4,2,.3,1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
            role="document"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setOpenIdx(null)
            }}
          >
            <button
              className="hover:text-primary-500 absolute top-4 right-4 text-2xl font-bold text-gray-400"
              onClick={() => setOpenIdx(null)}
              aria-label="关闭详情"
            >
              ×
            </button>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {projectsData[openIdx].title}
            </h2>
            <img
              src={projectsData[openIdx].imgSrc}
              alt={projectsData[openIdx].title}
              className="w-full rounded mb-4 object-cover"
              style={{ maxHeight: 200 }}
            />
            <div className="whitespace-pre-line text-gray-700 dark:text-gray-200">
              {projectsData[openIdx].detail}
            </div>
          </div>
          <style jsx global>{`
            @keyframes scaleIn {
              0% {
                transform: scale(0.7);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}