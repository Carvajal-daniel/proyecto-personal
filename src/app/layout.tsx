import type { Metadata } from 'next'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import './globals.css'
import { esES } from "@clerk/localizations";

export const metadata: Metadata = {
  title: 'Clerk Next.js',
  description: 'App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body>


          {children}

        </body>
      </html>
    </ClerkProvider>
  )
}