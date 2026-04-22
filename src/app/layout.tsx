import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/ThemeContext'

export const metadata: Metadata = {
  title: 'Harsh Agrawal | Data Analyst & Developer',
  description: 'Turning Raw Data into Real Insights — Portfolio of Harsh Agrawal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
