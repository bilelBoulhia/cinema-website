
import "@/app/style/globals.css";
import Header from "@/app/sections/Header";
import localFont from 'next/font/local'
import React from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "cinema app",

};

const Montserrat = localFont({
    src: '../assets/Fonts/Montserrat-VariableFont_wght.ttf',
    display: 'swap',
})

export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={Montserrat.className}>
      <body className="bg-background text-foreground">
      <Header/>
      <main className="min-h-screenq flex flex-col items-center">
          {children}
      </main>
      </body>
    </html>
  );
}
