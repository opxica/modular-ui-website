import type { Metadata } from 'next'
import { Montserrat } from "next/font/google";

import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Modular UI',
  description: 'Craft beautiful, accessible, and responsive Flutter UIs with a Modular-UI Design-inspired component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
    
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
