"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Heart, Award } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "María González",
    role: "Paciente de Ortodoncia",
    content:
      "Mi experiencia con BRODENT'S ha sido excepcional. El Dr. Méndez y su equipo me hicieron sentir cómoda desde el primer día. Después de un año de tratamiento, mi sonrisa luce increíble.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Paciente de Implantes",
    content:
      "Perdí varios dientes en un accidente y pensé que nunca volvería a sonreír con confianza. Gracias a los implantes dentales de BRODENT'S, recuperé mi sonrisa y mi autoestima.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    role: "Paciente de Blanqueamiento",
    content:
      "El tratamiento de blanqueamiento superó mis expectativas. En solo dos sesiones, mis dientes lucen notablemente más blancos y brillantes. El personal es muy profesional y atento.",
    avatar: "/placeholder.svg",
    rating: 4,
  },
  {
    name: "Javier López",
    role: "Paciente de Endodoncia",
    content:
      "Tenía mucho miedo al tratamiento de conducto, pero el equipo de BRODENT'S hizo que fuera completamente indoloro. Su tecnología avanzada y experiencia marcan la diferencia.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    name: "Ana Sánchez",
    role: "Madre de paciente pediátrico",
    content:
      "Mi hijo siempre tenía miedo al dentista hasta que visitamos BRODENT'S. El enfoque amigable con los niños y la paciencia del personal hicieron que ahora disfrute sus visitas.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  // Marcar como montado para evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
    return () => {
      setAutoplay(false)
    }
  }, [])

  // Auto-avance cada 7 segundos si autoplay está activado
  useEffect(() => {
    if (!isMounted || !autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isMounted, autoplay])

  // Pausar autoplay cuando el usuario interactúa con los controles
  const handleNavigation = (direction: "prev" | "next") => {
    setAutoplay(false) // Pausar autoplay temporalmente

    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    } else {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    // Reactivar autoplay después de 10 segundos de inactividad
    setTimeout(() => setAutoplay(true), 10000)
  }

  // Ir a un testimonio específico
  const goToTestimonial = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
    setTimeout(() => setAutoplay(true), 10000)
  }

  // Si no está montado, mostrar un placeholder
  if (!isMounted) {
    return (
      <section id="testimonials" className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Lo Que Dicen Nuestros Pacientes</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Descubre por qué nuestros pacientes confían en nosotros para sus tratamientos dentales
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-6 text-center">Cargando testimonios...</CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="testimonials"
      className="py-12 md:py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(var(--muted)/30) 0%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Efecto de brillo para modo oscuro */}
      <div className="hidden dark:block absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-xl"></div>
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-3">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Award className="h-8 w-8 text-primary mr-3" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 dark:from-foreground dark:to-foreground/80">
              Lo Que Dicen Nuestros Pacientes
            </h2>
          </div>
          <motion.div
            className="w-20 h-1 bg-primary/60 mx-auto rounded-full my-4 md:my-5"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-sm sm:text-base text-muted-foreground px-4 max-w-xl mx-auto">
            Descubre por qué nuestros pacientes confían en nosotros para sus tratamientos dentales y cómo hemos
            transformado sus sonrisas y sus vidas.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel de testimonios */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full"
                >
                  <Card className="border border-primary/10 dark:border-primary/20 bg-background/80 dark:bg-background/30 backdrop-blur-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden mx-auto transform transition-all hover:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.25)]">
                    <CardContent className="p-6 sm:p-8 relative">
                      {/* Icono decorativo */}
                      <motion.div
                        className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 opacity-70"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 0.7, rotate: 12 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="relative">
                          <Image
                            src="/Images/logo.png" // Ruta de tu imagen
                            alt="Logo de BRODENT'S"
                            width={200}
                            height={100}
                            className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24"
                          />
                          {/* Efecto de brillo para modo oscuro */}
                          <div className="absolute inset-0 hidden dark:block">
                            <Image
                              src="/Images/logo.png" // Ruta de tu imagen
                              alt="Logo de BRODENT'S"
                              width={200}
                            height={100}
                              className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24"
                            />
                            <div className="absolute inset-0 blur-sm">
                              <Image
                                src="/Images/logo.png" // Ruta de tu imagen
                                alt="Logo de BRODENT'S"
                                width={200}
                            height={100}
                                className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="mb-5 flex items-center">
                        <div className="flex mr-4">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8, y: 5 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.1 * i,
                                ease: "easeOut",
                              }}
                            >
                              <Star
                                className={`h-5 w-5 ${i < testimonials[currentIndex].rating
                                  ? "text-primary fill-primary"
                                  : "text-muted-foreground"
                                  }`}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          className="text-sm text-muted-foreground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          Rating {testimonials[currentIndex].rating}/5
                        </motion.div>
                      </div>

                      <motion.p
                        className="text-base sm:text-lg text-foreground/90 dark:text-foreground/95 mb-7 sm:mb-8 relative z-10 italic font-light leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        &quot;{testimonials[currentIndex].content}&quot;
                      </motion.p>


                      <motion.div
                        className="flex items-center gap-4 relative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <Avatar className="h-14 w-14 rounded-full border-2 border-primary/20 dark:border-primary/30 shadow-md p-0.5 bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20 dark:to-primary/5">
                          <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonials[currentIndex].name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-base text-foreground group flex items-center">
                            {testimonials[currentIndex].name}
                            <motion.div
                              className="ml-2 text-primary"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.35, delay: 0.7 }}
                            >
                              <Heart className="h-3 w-3 fill-primary" />
                            </motion.div>
                          </div>
                          <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Controles de navegación */}
          <div className="flex justify-between items-center mt-8 sm:mt-10">
            <motion.div
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleNavigation("prev")}
                className="h-10 w-10 rounded-full border border-primary/20 dark:border-primary/30 bg-background/80 dark:bg-background/20 backdrop-blur-sm shadow-sm hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Anterior</span>
              </Button>
            </motion.div>

            {/* Indicadores */}
            <div className="flex gap-2 justify-center">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                    ? "w-10 bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/80"
                    : "w-2.5 bg-primary/30 dark:bg-primary/40 hover:bg-primary/50 dark:hover:bg-primary/60"
                    }`}
                  onClick={() => goToTestimonial(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                />
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleNavigation("next")}
                className="h-10 w-10 rounded-full border border-primary/20 dark:border-primary/30 bg-background/80 dark:bg-background/20 backdrop-blur-sm shadow-sm hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

