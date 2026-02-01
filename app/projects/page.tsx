'use client'

import { Box, Container, Grid, Typography, Card, CardContent, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { GitHub, Launch } from '@mui/icons-material'
import { useState } from 'react'

const projects = [
  {
    title: 'Sales and Marketing Analysis',
    description: 'Analyzed 100K+ sales records to identify market trends and customer behavior. Automated data cleaning and feature engineering for temporal and geographic insights. Built interactive dashboards to visualize product performance and sales distribution. Delivered actionable marketing insights, improving campaign targeting efficiency.',
    category: 'Analytics',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Sentiment Analysis using NLP',
    description: 'Designed NLP pipeline for sentiment detection and text preprocessing. Implemented dual sentiment scoring (TextBlob & VADER) and fine-tuned BERT for accuracy. Visualized results through interactive word clouds and sentiment trends. Generated automated reports summarizing customer sentiment insights.',
    category: 'AI',
    technologies: ['Python', 'TextBlob', 'VADER', 'BERT', 'Transformers'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Price Optimization Model',
    description: 'Developed dynamic pricing models using historical sales and competitor data. Conducted price sensitivity and scenario simulations to recommend optimal pricing. Created automated analysis pipeline with future dashboard integration planned. Enhanced profitability predictions through ensemble ML modeling.',
    category: 'AI',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'AI', 'Analytics']

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
              Explore my work in analytics, AI, and data science. Each project represents a unique challenge and innovative solution.
            </Typography>
          </Box>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedCategory === category ? 'contained' : 'outlined'}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    backgroundColor: selectedCategory === category ? '#1a1a1a' : 'white',
                    color: selectedCategory === category ? 'white' : '#1a1a1a',
                    borderColor: '#e0e0e0',
                    '&:hover': {
                      backgroundColor: selectedCategory === category ? '#333' : '#f5f5f5',
                      borderColor: '#1a1a1a',
                    }
                  }}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                      borderColor: '#1a1a1a',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
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
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            backgroundColor: '#f5f5f5',
                            color: '#1a1a1a',
                            border: '1px solid #e0e0e0',
                            fontSize: '0.75rem',
                            '&:hover': {
                              backgroundColor: '#e0e0e0',
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
