import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ClerkProvider} from "@clerk/nextjs"
import {neobrutalism,shadesOfPurple,dark,unstable_createTheme} from "@clerk/themes"
import { ThemeProvider } from '@/components/theme-provider'
import {Toaster} from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitch Clone',
  description: 'Developed by Saul Augusto Gasca Farrera',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{baseTheme: neobrutalism}}>
              <html lang="en">
                <body className={inter.className}>
                 
                  <ThemeProvider
                    attribute='class'
                    forcedTheme='dark'
                    storageKey='twitch-clone-theme'
                  >
                     <Toaster theme='light' position='bottom-center' />
                      {children}
                  </ThemeProvider>
                  
                </body>
              </html>
    </ClerkProvider>
    
  )
}
