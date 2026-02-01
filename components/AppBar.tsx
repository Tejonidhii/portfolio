'use client'

import { AppBar as MUIAppBar, Toolbar, Button, IconButton, useScrollTrigger, Slide, Drawer, List, ListItem, ListItemText, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  children?: React.ReactElement;
  window?: () => Window
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export function AppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href

    return (
      <Link
        href={href}
        className={`relative group ${isActive ? 'text-primary' : 'text-white'}`}
        style={{ textDecoration: 'none' }}
      >
        <span className="relative z-10 overflow-hidden rounded-full">
          {children}
        </span>
        <span className={`
          absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left
          transition-all duration-300 ease-out rounded-full
          ${isActive ? 'scale-x-100' : 'scale-x-0'}
          group-hover:scale-x-100
        `} />
        <span className={`
          absolute inset-0 bg-primary/10 rounded-full -z-10
          transition-all duration-300 ease-out scale-0 opacity-0 overflow-hidden
          group-hover:scale-100 group-hover:opacity-100
        `} />
      </Link>
    )
  }

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          key={item.name}
          component={Link} 
          href={item.path}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1200,
          width: { xs: '90%', md: '60%', lg: '50%' },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <MUIAppBar 
            position="static"
            sx={{ 
              bgcolor: 'white', 
              color: '#1a1a1a',
              borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e0e0e0',
              overflow: 'hidden',
              '&:hover': {
                bgcolor: 'white',
              }
            }}
          >
              <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
                  {navItems.map((item, index) => (
                    <NavLink key={item.name} href={item.path}>
                      <Button 
                        sx={{ 
                          mx: { xs: 0.5, sm: 1 },
                          color: '#1a1a1a',
                          fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          minWidth: 'auto',
                          px: { xs: 1, sm: 2 },
                          borderRadius: '20px',
                          transition: 'all 0.3s ease',
                          overflow: 'hidden',
                          '&:hover': {
                            bgcolor: 'rgba(0, 0, 0, 0.05)',
                            transform: 'scale(1.05)',
                          }
                        }}
                      >
                        <motion.span
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {item.name}
                        </motion.span>
                      </Button>
                    </NavLink>
                  ))}
                </Box>
              </Toolbar>
            </MUIAppBar>
          </motion.div>
        </Box>
      
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            background: 'var(--paper)',
            borderRight: '1px solid rgba(100, 255, 218, 0.1)'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
