"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Cta() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10">
          <div className="text-primary/20 dark:text-primary/10">
            <Sparkles className="h-40 w-40" />
          </div>
        </div>

        <div className="relative z-10 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¿Listo para transformar tu sonrisa?
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Agenda tu primera consulta gratuita hoy mismo y descubre cómo podemos ayudarte a conseguir la sonrisa que
            siempre has deseado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
                Agendar Cita Ahora
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#services" onClick={(e) => handleLinkClick(e, "#services")}>
                Ver Servicios
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

