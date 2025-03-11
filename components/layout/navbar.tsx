"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import {
  Menu,
  Moon,
  Sun,
  X,
  Home,
  Users,
  Stethoscope,
  MessageSquareQuote,
  ImageIcon,
  PhoneCall,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "#hero", icon: <Home className="h-5 w-5" /> },
  { name: "Nosotros", href: "#about", icon: <Users className="h-5 w-5" /> },
  { name: "Servicios", href: "#services", icon: <Stethoscope className="h-5 w-5" /> },
  { name: "Testimonios", href: "#testimonials", icon: <MessageSquareQuote className="h-5 w-5" /> },
  { name: "Galería", href: "#gallery", icon: <ImageIcon className="h-5 w-5" /> },
  { name: "Contacto", href: "#contact", icon: <PhoneCall className="h-5 w-5" /> },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Check which section is currently in view
    const handleScrollSpy = () => {
      const sections = navLinks.map((link) => link.href.substring(1))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleScrollSpy)

    // Initial check
    handleScrollSpy()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleScrollSpy)
    }
  }, [])

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
  
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
    }
  }  

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative h-10 w-10">
            <Image src="/Images/logo.png" alt="BRODENT'S Logo" fill className="object-contain" priority />
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline">BRODENT&apos;S</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors flex items-center gap-2 text-sm",
                activeSection === link.href.substring(1) && "text-primary font-medium",
              )}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Botones de acción en desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild>
            <Link href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>
              Agendar Cita
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-1"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Botón de cita en móvil - visible solo en pantallas medianas */}
          <Button asChild size="sm" className="hidden sm:flex mr-2">
            <Link href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>
              Agendar Cita
            </Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0 border-l-primary/20 overflow-y-auto">
              <SheetHeader className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/30 px-6 py-4 flex flex-row items-center justify-between">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10">
                    <Image src="/Images/logo.png" alt="BRODENT'S Logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-xl text-primary">BRODENT&apos;S</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full hover:bg-primary/10"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetHeader>

              {/* Contenido del menú */}
              <div className="px-6 py-6">
                <nav className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "group relative flex items-center justify-between py-4 transition-all",
                        index !== navLinks.length - 1 && "border-b border-border/20",
                        activeSection === link.href.substring(1)
                          ? "text-primary font-medium"
                          : "text-foreground/80 hover:text-primary",
                      )}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "flex items-center justify-center w-10 h-10 rounded-full transition-all",
                            activeSection === link.href.substring(1)
                              ? "bg-primary/20 text-primary"
                              : "bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                          )}
                        >
                          {link.icon}
                        </div>
                        <span className="text-base">{link.name}</span>
                      </div>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-all",
                          activeSection === link.href.substring(1)
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary",
                        )}
                      />
                    </Link>
                  ))}
                </nav>

                {/* Sección de contacto rápido */}
                <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <h3 className="font-medium text-primary mb-2">¿Necesitas ayuda?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Agenda tu primera consulta gratuita y comienza a mejorar tu sonrisa hoy mismo.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="#contact" onClick={(e) => handleNavLinkClick(e, "#contact")}>
                      Agendar Cita
                    </Link>
                  </Button>
                </div>

                {/* Footer del menú */}
                <div className="mt-8 pt-4 border-t border-border/20 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Cambiar tema</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="rounded-full h-8 w-8"
                    >
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    © {new Date().getFullYear()} BRODENT&apos;S. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
