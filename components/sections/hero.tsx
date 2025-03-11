"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SmileIcon as Tooth, ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Fondo principal con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 -z-10" />

      {/* Gradientes laterales para difuminar los bordes */}
      <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background to-transparent z-10" />

      <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full text-primary backdrop-blur-sm">
            <Tooth className="h-4 w-4" />
            <span className="text-sm font-medium">Clínica Odontológica de Excelencia</span>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Tu sonrisa merece <span className="text-primary">lo mejor</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            En BRODENT&apos;S combinamos tecnología de vanguardia con un equipo de profesionales altamente calificados
            para ofrecerte el mejor cuidado dental.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button size="lg" asChild>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Agendar Cita
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  const servicesSection = document.getElementById("services")
                  if (servicesSection) {
                    window.scrollTo({
                      top: servicesSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                Nuestros Servicios
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square">
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.6, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
            />
            <Image
              src="/Images/logo.png"
              alt="BRODENT'S - Smile With Us"
              width={500}
              height={500}
              className="relative z-10 object-contain animate-float"
              priority
            />

            <motion.div
              className="absolute -bottom-6 -right-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 z-20 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Tooth className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Primera consulta</p>
                  <p className="text-sm text-muted-foreground">¡Totalmente gratis!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
