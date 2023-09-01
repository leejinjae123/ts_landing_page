import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: '캐치유 랜딩페이지',
  description: 'Catchu-landing-page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
