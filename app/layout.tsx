import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/common/NavBar'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skate Pro Connect',
  description: 'Plataforma de skate en línea: SkatePro Connect. Unifica la comunidad del skate. Info de lugares, noticias, eventos y más. ¡Únete! 🛹✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className} >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
