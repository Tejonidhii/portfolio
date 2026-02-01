'use client'

import { Box, Container, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { Email, Phone, LocationOn } from '@mui/icons-material'

export default function Contact() {
  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      content: 'tejontech@gmail.com',
      link: 'mailto:tejontech@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      content: '+1 234 567 890',
      link: 'tel:+1234567890',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      content: 'Galway, Ireland',
      link: 'https://maps.google.com',
    },
  ]

  return (
    <Box sx={{ minHeight: '100vh', pt: 10, pb: 6, bgcolor: '#F5F5DC' }}>
      <Container maxWidth="lg">
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
              Contact
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
              Let's connect! Feel free to reach out if you're looking for a developer,
              have a question, or just want to chat about technology and design.
            </Typography>
          </Box>
        </motion.div>

        {/* Centered Contact Information */}
        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  component="a"
                  href={info.link}
                  target="_blank"
                  elevation={0}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    minWidth: '200px',
                    bgcolor: 'white',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: '#1a1a1a',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '2rem',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="#333333" sx={{ fontSize: '1rem' }}>
                      {info.content}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
