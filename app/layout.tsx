import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/icon.ico",
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
      <body>{children}</body>
    </html>
  );
}
