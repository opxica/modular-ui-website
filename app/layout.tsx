import Head from 'next/head'; // Import the Head component
import { Montserrat } from "next/font/google";

import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Modular UI',
  description: 'Craft beautiful, accessible, and responsive Flutter UIs with a Modular-UI Design-inspired component library',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> {/* Add the favicon link here */}
      </Head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
