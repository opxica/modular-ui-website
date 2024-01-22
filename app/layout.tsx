import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Modular UI",
  description:
    "Craft beautiful, accessible, and responsive Flutter UIs with a Modular-UI Design-inspired component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
        `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
