import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/providers/theme-provider'
import { AppBar } from '@/components/AppBar'
import CustomCursor from '@/components/CustomCursor'
import PageTransition from '@/components/PageTransition'
import Link from 'next/link'
import { lightGradientBackground, textColorPrimary } from '@/styles/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'A modern portfolio built with Next.js, Three.js, and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: '#F5F5DC', color: '#1a1a1a' }}>
        <ThemeProvider>
          <CustomCursor />
          <AppBar />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
