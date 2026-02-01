'use client'

import { Box } from '@mui/material'
import { Hero } from '@/components/Hero'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mt: '64px', bgcolor: '#F5F5DC', minHeight: '100vh' }}>
        <Hero />
      </Box>
    </motion.main>
  )
}
