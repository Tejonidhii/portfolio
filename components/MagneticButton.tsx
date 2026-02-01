'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Box, SxProps } from '@mui/material'

interface Props {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  sx?: SxProps
}

export default function MagneticButton({ children, className = '', onClick, sx }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <Box
      component={motion.button}
      ref={buttonRef}
      className={`magnetic ${className}`}
      sx={sx}
      animate={{
        x: x * 0.3,
        y: y * 0.3,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        animate={{
          x: x * 0.5,
          y: y * 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.span>
    </Box>
  )
}
