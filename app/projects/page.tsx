'use client'

import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { GitHub, Launch } from '@mui/icons-material'
import { useState } from 'react'

const projects = [
  {
    title: 'AI Sales Predictor',
    description: 'Machine learning model that predicts sales trends with 95% accuracy using advanced analytics and TensorFlow.',
    category: 'AI',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'React'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with interactive visualizations and comprehensive data insights.',
    category: 'Analytics',
    technologies: ['Tableau', 'Power BI', 'SQL', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'UX Research Platform',
    description: 'Comprehensive user research tool with heatmaps, session recordings, and behavioral analytics.',
    category: 'Design',
    technologies: ['Figma', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Customer Insights AI',
    description: 'AI-powered platform that analyzes customer behavior and provides actionable business insights.',
    category: 'AI',
    technologies: ['Python', 'NLP', 'FastAPI', 'React'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Design System',
    description: 'Complete design system with components, patterns, and guidelines for consistent UI development.',
    category: 'Design',
    technologies: ['Figma', 'Storybook', 'TypeScript', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Process Automation',
    description: 'Automated workflow system that reduces manual processes by 75% using AI and .NET technologies.',
    category: 'Analytics',
    technologies: ['.NET C#', 'Python', 'Azure', 'Power Automate'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'AI', 'Analytics', 'Design']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <Box sx={{ minHeight: '100vh', pt: 10, pb: 6, bgcolor: '#F5F5DC' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3,
                fontWeight: 300,
                color: '#1a1a1a',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Projects
            </Typography>
            <Typography 
              variant="h6" 
              color="#666"
              sx={{ 
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              A curated collection of work spanning AI, analytics, and design. 
              Each project represents a unique challenge and innovative solution.
            </Typography>

            {/* Category Filter */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 6, flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'contained' : 'text'}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: selectedCategory === category ? 600 : 400,
                    color: selectedCategory === category ? 'white' : '#666',
                    backgroundColor: selectedCategory === category ? '#1a1a1a' : 'transparent',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: selectedCategory === category ? '#333' : 'rgba(0,0,0,0.04)',
                    }
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    {/* Category Badge */}
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={project.category}
                        size="small"
                        sx={{
                          backgroundColor: '#f5f5f5',
                          color: '#666',
                          fontWeight: 500,
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        lineHeight: 1.3
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="#666"
                      sx={{ 
                        mb: 3,
                        lineHeight: 1.6
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#fafafa',
                            color: '#333',
                            border: '1px solid #e0e0e0',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  {/* Actions */}
                  <Box sx={{ p: 3, pt: 0, display: 'flex', gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => window.open(project.github, '_blank')}
                      sx={{
                        flex: 1,
                        borderColor: '#e0e0e0',
                        color: '#666',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          borderColor: '#1a1a1a',
                          color: '#1a1a1a',
                          backgroundColor: 'rgba(0,0,0,0.02)',
                        }
                      }}
                    >
                      <GitHub sx={{ mr: 1, fontSize: '1rem' }} />
                      Code
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => window.open(project.live, '_blank')}
                      sx={{
                        flex: 1,
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#333',
                        }
                      }}
                    >
                      <Launch sx={{ mr: 1, fontSize: '1rem' }} />
                      Live
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
