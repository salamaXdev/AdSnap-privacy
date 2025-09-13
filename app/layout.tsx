import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdSnap Privacy Policy',
  description: 'Privacy Policy for AdSnap Chrome Extension - Learn how we protect your data and privacy.',
  keywords: 'AdSnap, privacy policy, Chrome extension, Facebook ads, data protection',
  authors: [{ name: 'AdSnap Team' }],
  openGraph: {
    title: 'AdSnap Privacy Policy',
    description: 'Privacy Policy for AdSnap Chrome Extension',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
