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
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
