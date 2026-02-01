'use client'

import { Box, Container, Typography, Grid, LinearProgress, Card } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Torus } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import MagneticButton from '@/components/MagneticButton' // Import the MagneticButton component
import PageTransition from '@/components/PageTransition'; // Import the PageTransition component

const skills = [
  { name: 'AI/ML', emoji: '🤖', category: 'Analytics' },
  { name: 'Data Analysis', emoji: '📊', category: 'Analytics' },
  { name: 'UI/UX Design', emoji: '🎨', category: 'Design' },
  { name: 'User Research', emoji: '🔍', category: 'Design' },
  { name: 'React', emoji: '⚛️', category: 'Development' },
  { name: 'Python', emoji: '🐍', category: 'Development' },
  { name: 'TypeScript', emoji: '📱', category: 'Development' },
  { name: '.NET C#', emoji: '🔷', category: 'Development' },
  { name: 'SQL', emoji: '🗄️', category: 'Analytics' },
  { name: 'Business Analytics', emoji: '🧠', category: 'Analytics' },
  { name: 'Agile/Scrum', emoji: '🎯', category: 'Process' },
  { name: 'Tableau/Power BI', emoji: '📊', category: 'Analytics' },
  { name: 'Product Management', emoji: '🚀', category: 'Process' },
]

const education = [
  { year: '2026', degree: 'Master of Science in Business Analytics', university: 'University of Galway' },
  { year: '2020', degree: 'Bachelor of Science in Computer Science', university: 'University of Galway' },
]

const workExperience = [
  { year: 'JAN 2026 - MAR 2026', position: 'Graduate Teaching Assistant', company: 'University of Galway' },
  { year: 'SEP 2022 - MAR 2024', position: 'Associate Engineer', company: 'TEKsystems Global Services Pvt. Ltd' },
  { year: 'FEB 2022 - JUN 2022', position: 'Intern Engineer', company: 'TEKsystems Global Services Pvt. Ltd' },
  { year: 'MAR 2020 - DEC 2020', position: 'User Research Intern', company: 'Programming Shaala (Startup)' },
]

function AnimatedTorus() {
  const torusRef = useRef<THREE.Mesh>(null)

  return (
    <Torus args={[3, 1, 16, 100]} ref={torusRef}>
      <meshStandardMaterial
        color="#64ffda"
        wireframe
        roughness={0.5}
        metalness={0.8}
      />
    </Torus>
  )
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <PageTransition>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ minHeight: '100vh', pt: 10, pb: 6, bgcolor: '#F5F5DC' }} ref={containerRef}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2 }}>
            <Box sx={{ marginRight: 3 }}>
              <Box
                sx={{
                  backgroundColor: '#1a1a1a', // Dark color matching Hero button
                  '&:hover': {
                    backgroundColor: '#333', // Darker shade on hover
                  },
                }}
              >
                <MagneticButton
                  className="glow"
                  onClick={() => {
                    // Logic to download CV
                    const link = document.createElement('a');
                    link.href = '/path/to/your/cv.pdf'; // Update with the correct path to your CV
                    link.download = 'Your_Name_CV.pdf'; // Update with your desired file name
                    link.click();
                  }}
                  sx={{
                    backgroundColor: 'transparent',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white', // White text to match Hero button
                      px: 4,
                      py: 2,
                      borderRadius: 2,
                    }}
                    className="glow"
                  >
                    Download CV
                  </Typography>
                </MagneticButton>
              </Box>
            </Box>
          </Box>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" color="#1a1a1a" sx={{ mb: 3, fontWeight: 300 }}>
                  About Me
                </Typography>
                <Typography 
                  variant="body1" 
                  color="#666" 
                  sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}
                >
                  MSc Business Analytics student with ~2 years of experience in software engineering, analytics, and user research. 
                  Strong ability to translate business and client requirements into technology-driven solutions. 
                  Experienced in supporting enterprise client engagements in Agile environments. 
                  Skilled in data analysis, problem-solving, and stakeholder communication. 
                  Interested in roles at the intersection of technology, business operations, and financial systems.
                </Typography>
              </Box>

              {/* Timeline Section */}
              <Box sx={{ mb: 8 }}>
                <Typography variant="h4" color="#1a1a1a" sx={{ textAlign: 'center', mb: 6, fontWeight: 300 }}>
                  My Journey
                </Typography>
                
                <Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}>
                  {/* Horizontal Timeline Line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#e0e0e0',
                      zIndex: 0,
                    }}
                  />

                  {/* Timeline Items */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', py: 4 }}>
                    {[
                      {
                        year: '2026',
                        title: 'Graduate Teaching Assistant',
                        company: 'University of Galway',
                        period: 'JAN 2026 - MAR 2026',
                        type: 'work',
                      },
                      {
                        year: '2025-2026',
                        title: 'Master of Science in Business Analytics',
                        company: 'University of Galway',
                        period: '2026',
                        type: 'education',
                      },
                      {
                        year: '2022-2024',
                        title: 'Associate Engineer',
                        company: 'TEKsystems Global Services Pvt. Ltd',
                        period: 'SEP 2022 - MAR 2024',
                        type: 'work',
                      },
                      {
                        year: '2022',
                        title: 'Intern Engineer',
                        company: 'TEKsystems Global Services Pvt. Ltd',
                        period: 'FEB 2022 - JUN 2022',
                        type: 'work',
                      },
                      {
                        year: '2020',
                        title: 'User Research Intern',
                        company: 'Programming Shaala (Startup)',
                        period: 'MAR 2020 - DEC 2020',
                        type: 'work',
                      },
                      {
                        year: '2018-2022',
                        title: 'Bachelor of Engineering in Information Science',
                        company: 'Vidyavardhaka College Of Engineering',
                        period: 'AUG 2018 - JUL 2022',
                        type: 'education',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{ flex: 1, maxWidth: '180px' }}
                      >
                        <Box sx={{ textAlign: 'center', position: 'relative' }}>
                          {/* Date Above Timeline */}
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: '#999', 
                              fontWeight: 500, 
                              fontSize: '0.75rem',
                              mb: 1,
                              display: 'block'
                            }}
                          >
                            {item.year}
                          </Typography>
                          
                          {/* Connecting Line */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '-2rem',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: 2,
                              height: '2rem',
                              background: '#e0e0e0',
                              zIndex: 1,
                            }}
                          />
                          
                          {/* Node */}
                          <Box
                            sx={{
                              width: 16,
                              height: 16,
                              backgroundColor: '#1a1a1a',
                              borderRadius: '50%',
                              margin: '0 auto 1rem',
                              position: 'relative',
                              zIndex: 2,
                              border: '3px solid white',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            }}
                          />

                          {/* Card */}
                          <Box
                            sx={{
                              p: 2,
                              backgroundColor: 'white',
                              border: '1px solid #e0e0e0',
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              minHeight: '100px',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              '&:hover': {
                                borderColor: '#1a1a1a',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                              }
                            }}
                          >
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 1, fontSize: '0.9rem' }}>
                              {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem' }}>
                              {item.company}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Skills Section */}
              <Box sx={{ mb: 8 }}>
                <Typography variant="h4" color="#1a1a1a" sx={{ textAlign: 'center', mb: 6, fontWeight: 300 }}>
                  Technical Skills
                </Typography>
                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box
                          sx={{
                            px: 3,
                            py: 1.5,
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: 2,
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: '#1a1a1a',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            }
                          }}
                        >
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              fontWeight: 500,
                              color: '#1a1a1a',
                              fontSize: '0.9rem'
                            }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Container>

        </Box>
      </motion.div>
    </PageTransition>
  )
}
