import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/scroll-to-top"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "BRODENT'S - Clínica Odontológica",
  description: "Sonríe con nosotros - Clínica odontológica de alta calidad",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storageTheme = localStorage.getItem('theme')
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                  
                  if (storageTheme === 'dark' || (!storageTheme && systemDark)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body 
        className={cn(
          "min-h-screen bg-background antialiased transition-colors",
          fontSans.className
        )}
        suppressHydrationWarning
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
          storageKey="theme"
        >
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
