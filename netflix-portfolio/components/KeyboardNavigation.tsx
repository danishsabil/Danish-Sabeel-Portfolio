"use client"

import { useEffect, useRef } from "react"

interface KeyboardNavigationProps {
  items: any[]
  onNavigate: (index: number) => void
  currentIndex: number
}

export default function KeyboardNavigation({
  items,
  onNavigate,
  currentIndex,
}: KeyboardNavigationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        const prevIndex = Math.max(currentIndex - 1, 0)
        onNavigate(prevIndex)
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        const nextIndex = Math.min(currentIndex + 1, items.length - 1)
        onNavigate(nextIndex)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, items.length, onNavigate])

  return null
}
