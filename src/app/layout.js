import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Sereene - Healthcare Excellence',
  description: 'Leading the future of medical innovation with comprehensive disposable healthcare, hygiene, and wellness solutions',
  keywords: ['healthcare', 'medical supplies', 'hygiene products', 'medical apparels', 'wound care'],
  authors: [{ name: 'Sereene Healthcare' }],
  openGraph: {
    title: 'Sereene - Healthcare Excellence',
    description: 'Leading the future of medical innovation with comprehensive disposable healthcare, hygiene, and wellness solutions',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
