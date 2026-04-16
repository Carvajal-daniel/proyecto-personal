import type { Metadata } from 'next'
import './globals.css'
import { Geist, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"], // 700 es Bold, 900 es Black (muy grueso)
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <html lang="es" className={cn("font-sans", geist.variable)}>
        <body>


          {children}

        </body>
      </html>
  )
}