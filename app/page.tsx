'use client'

import { useEffect, useState } from 'react'

const lines = ['欢迎访问我的个人博客！', 'Hello World']

export default function Home() {
  const [display, setDisplay] = useState(['', ''])
  useEffect(() => {
    let idx = 0
    let charIdx = 0
    let timer: NodeJS.Timeout
    function typeLine() {
      if (idx >= lines.length) return
      if (charIdx < lines[idx].length) {
        setDisplay((prev) => {
          const newDisplay = [...prev]
          newDisplay[idx] = lines[idx].slice(0, charIdx + 1)
          return newDisplay
        })
        charIdx++
        timer = setTimeout(typeLine, 120)
      } else {
        idx++
        charIdx = 0
        timer = setTimeout(typeLine, 400)
      }
    }
    typeLine()
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex-col items-center justify-center text-3xl font-bold select-none h-[60vh] flex">
      <div className="text-primary-500 mb-2 tracking-wide">
        {display[0]}
        {display[0].length < lines[0].length && <span className="animate-pulse">|</span>}
      </div>
      <div className="text-gray-700 dark:text-gray-200">
        {display[1]}
        {display[0].length === lines[0].length && display[1].length < lines[1].length && (
          <span className="animate-pulse">|</span>
        )}
      </div>
    </div>
  )
}
