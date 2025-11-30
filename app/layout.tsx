import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '영훈 포트폴리오',
  description: '웹퍼블리셔 포트폴리오',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="max-w-4xl mx-auto px-4">
        <header className="py-6 border-b">
          <nav className="flex gap-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className="py-10">{children}</main>
        <footer className="py-6 border-t text-sm text-gray-500">
          © 2025 Younghun
        </footer>
      </body>
    </html>
  )
}