"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Send, Clock, Calendar } from "lucide-react"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [ setShowScrollTop] = useState(false)

  // Actualizar el año automáticamente cuando cambie
  useEffect(() => {
    // Verificar el año actual cada día a medianoche
    const checkYear = () => {
      const now = new Date()
      const year = now.getFullYear()
      if (year !== currentYear) {
        setCurrentYear(year)
      }
    }

    // Verificar inmediatamente
    checkYear()

    // Configurar un intervalo para verificar diariamente
    const interval = setInterval(checkYear, 86400000) // 24 horas

    return () => clearInterval(interval)
  }, [currentYear])

  // Animación para los elementos del footer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="bg-muted py-16 border-t relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Columna 1: Logo e información */}
          <motion.div variants={itemVariants} className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/Images/logo.png"
                  alt="BRODENT'S Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              <span className="font-bold text-xl text-primary">BRODENT&apos;S</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Cuidamos de tu sonrisa con los más altos estándares de calidad y tecnología de vanguardia.
            </p>

            {/* Horario */}
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary" />
                Horario de Atención
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>8:00 - 19:00</span>
                </li>
                <li className="text-muted-foreground flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 - 14:00</span>
                </li>
                <li className="text-muted-foreground flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-2">
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:text-primary hover:border-primary/50 hover:bg-primary/10"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces Rápidos */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-foreground flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {["Inicio", "Nosotros", "Servicios", "Testimonios", "Galería", "Contacto"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href={`#${item.toLowerCase() === "inicio" ? "hero" : item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-primary mr-0 opacity-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100"></span>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Servicios */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-foreground flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Servicios
            </h3>
            <ul className="space-y-3">
              {["Limpieza Dental", "Ortodoncia", "Implantes", "Blanqueamiento", "Endodoncia", "Odontopediatría"].map(
                (service) => (
                  <motion.li key={service} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-primary mr-0 opacity-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2 group-hover:opacity-100"></span>
                      {service}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Columna 4: Contacto y Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-5 text-foreground flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Contacto
            </h3>
            <ul className="space-y-4 mb-8">
              <motion.li whileHover={{ x: 5 }} className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Av. Principal 123, Ciudad</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+123 456 7890</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@brodents.com</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Agenda tu cita online</span>
              </motion.li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Suscríbete a nuestro boletín</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Tu email" className="bg-background/50 border-primary/20" />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Recibe noticias y promociones especiales</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Separador */}
        <div className="mt-12 pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} BRODENT&apos;S. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

