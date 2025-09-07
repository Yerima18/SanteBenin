import './globals.css'  // ← Cette ligne doit être présente
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SantéBénin - Plateforme de Prévention Santé',
  description: 'Plateforme de sensibilisation et de prévention des maladies au Bénin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}