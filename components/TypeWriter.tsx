'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface TypeWriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  component?: React.ElementType
  style?: React.CSSProperties
}

export default function TypeWriter({
  text,
  className = '',
  delay = 0,
  speed = 50,
  component: Component = motion.span,
  style = {},
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const controls = useAnimationControls()

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex))
          currentIndex++
          startTyping()
        } else {
          controls.start({ opacity: 1 })
        }
      }, speed)
    }

    const initialDelay = setTimeout(() => {
      startTyping()
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(initialDelay)
    }
  }, [text, delay, speed, controls])

  return (
    <Component
      className={className}
      style={{
        ...style,
        borderRight: '0.1em solid #64ffda',
        paddingRight: '0.1em',
        whiteSpace: 'pre-wrap',
      }}
      animate={controls}
      initial={{ opacity: 1 }}
    >
      {displayedText}
    </Component>
  )
}
