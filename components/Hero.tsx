'use client'

import { Box, Typography, Container, Link } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import MagneticButton from './MagneticButton'
import TypeWriter from './TypeWriter'

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null)

  return (
    <Torus args={[1, 0.4, 16, 100]} ref={torusRef}>
      <meshStandardMaterial
        color="#ffcc00"
        wireframe
        roughness={0.5}
        metalness={0.8}
      />
    </Torus>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
          <Box sx={{ flex: 1, minWidth: 300 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                color="#666"
                className="gradient-text"
                sx={{ mb: 2, fontFamily: 'monospace' }}
              >
                <TypeWriter text="Hi, my name is" delay={500} speed={50} />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography 
                variant="h1" 
                sx={{ mb: 2 }}
                className="glitch"
                data-text="R Tejonidhii"
              >
                <TypeWriter text="R Tejonidhii" delay={1500} speed={100} />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                color="#1a1a1a"
                sx={{ mb: 4 }}
                className="shine"
              >
                <TypeWriter text="Analytics • AI • Design" delay={2500} speed={75} />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography
                color="#666"
                sx={{ mb: 4, maxWidth: 540 }}
              >
                <TypeWriter 
                  text="Passionate about turning data into insights, building intelligent solutions, and creating beautiful designs. Let's make something amazing together! 🚀"
                  delay={3500}
                  speed={30}
                />
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Box
                sx={{
                  backgroundColor: '#1a1a1a', // Dark color matching Download CV button
                  border: '1px solid #e0e0e0', // Add border like Download CV
                  borderRadius: 2, // Add rounded corners like Download CV
                  display: 'inline-block', // Make it fit content instead of full width
                  '&:hover': {
                    backgroundColor: '#333', // Darker shade on hover
                  },
                }}
              >
                <MagneticButton
                  className="glow"
                  sx={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Link href="/projects">
                    <Typography
                      sx={{
                        color: "white", 
                        px: 4,
                        py: 2,
                        borderRadius: 2,
                        display: 'inline-block',
                        backgroundColor: 'transparent', 
                        textDecoration: 'none',
                      }}
                    >
                      Explore My Work
                    </Typography>
                  </Link>
                </MagneticButton>
              </Box>
            </motion.div>
          </Box>

          <motion.div
            style={{ flex: 1, minWidth: 300, height: 500, y, opacity }}
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <AnimatedTorus />
              <OrbitControls 
                enableZoom={false}
                autoRotate
                autoRotateSpeed={5}
              />
            </Canvas>
          </motion.div>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          
        </motion.div>
      </Box>
    </Box>
  )
}
