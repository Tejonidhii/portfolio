'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([])

  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 })
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    setTrail((prev) => [{ x: e.clientX, y: e.clientY }, ...prev].slice(0, 10)) // Keep last 10 positions
  }, [cursorX, cursorY])

  const handleMouseOver = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'A' || 
        (e.target as HTMLElement).tagName === 'BUTTON' ||
        (e.target as HTMLElement).closest('a') ||
        (e.target as HTMLElement).closest('button')) {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: isHovering ? 40 : 20,
          height: isHovering ? 40 : 20,
          borderRadius: '50%',
          border: `2px solid ${isHovering ? '#FF6584' : '#4B3D3D'}`,
          backgroundColor: '#FFFFFF',
          boxShadow: isHovering ? '0 0 10px rgba(255, 101, 132, 0.8)' : 'none',
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
        }}
        transition={{
          width: { type: 'spring', stiffness: 500, damping: 30 },
          height: { type: 'spring', stiffness: 500, damping: 30 },
        }}
      />
      {trail.map((pos, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#4B3D3D',
            x: pos.x,
            y: pos.y,
            translateX: '-50%',
            translateY: '-50%',
            opacity: 1 - index / trail.length,
          }}
        />
      ))}
    </motion.div>
  )
}
