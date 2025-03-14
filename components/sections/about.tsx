"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Award, Clock, HeartPulse, Users, ArrowRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <Award className="h-5 w-5" />,
    title: "Excelencia",
    description: "Más de 15 años de experiencia brindando servicios odontológicos de alta calidad.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Equipo Profesional",
    description: "Contamos con especialistas certificados en todas las áreas de la odontología.",
  },
  {
    icon: <HeartPulse className="h-5 w-5" />,
    title: "Atención Personalizada",
    description: "Tratamientos adaptados a las necesidades específicas de cada paciente.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Tecnología Avanzada",
    description: "Equipamiento de última generación para diagnósticos y tratamientos precisos.",
  },
]

export default function About() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Parallax effect for decorative elements
  const decorY1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const decorY2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const decorY3 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 -z-10" />

      <motion.div
        style={{ y: decorY1 }}
        className="absolute top-0 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"
      />
      <motion.div
        style={{ y: decorY2 }}
        className="absolute bottom-0 left-[5%] w-96 h-96 rounded-full bg-primary/3 blur-3xl -z-10"
      />
      <motion.div
        style={{ y: decorY3 }}
        className="absolute top-[30%] left-[30%] w-64 h-64 rounded-full bg-primary/4 blur-3xl -z-10"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:30px_30px] opacity-[0.015] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span className="block text-sm font-medium text-primary mb-3 tracking-widest uppercase">
              Nuestra Historia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Sobre Nosotros</h2>
            <div className="absolute -bottom-4 left-0 right-0 mx-auto w-12 h-1 bg-primary rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image column */}
          <motion.div style={{ y, opacity }} className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start h-full">
            <div className="relative">
              {/* Main image with glass effect border */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.1)] 
                  before:absolute before:inset-0 before:border before:border-white/20 before:rounded-2xl before:z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 mix-blend-overlay z-[1]" />

                <Image
                  src="/Images/team.jpg"
                  alt="Equipo de BRODENT'S"
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover w-full aspect-[4/5] z-0"
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -right-6 top-6 
                    backdrop-blur-md 
                    bg-gradient-to-br from-background/95 to-background/80
                    border border-border/50
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
                    p-3 sm:p-4
                    rounded-xl z-20
                    hover:shadow-[0_12px_42px_rgba(0,0,0,0.16)]
                    transition-all duration-300 ease-out
                    min-w-[160px] sm:min-w-[180px]"
                >
                  <div className="flex items-start gap-3">
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm sm:text-base text-foreground">Fundado en</h4>
                      <p className="text-xl font-bold text-primary">2008</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom info card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute bottom-0 left-0 transform translate-y-1/2 md:translate-y-1/3 lg:translate-y-1/4 
                    -translate-x-4 sm:-translate-x-6 lg:-translate-x-8
                    backdrop-blur-md 
                    bg-gradient-to-br from-background/95 to-background/80
                    border border-border/50
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
                    p-4 sm:p-5 
                    rounded-2xl z-20 
                    w-[calc(100%-2rem)] sm:w-auto
                    min-w-[240px] sm:min-w-[280px] lg:min-w-[320px]
                    max-w-[90vw] sm:max-w-[320px]
                    hover:shadow-[0_12px_42px_rgba(0,0,0,0.16)]
                    transition-all duration-300 ease-out"
                >
                  <div className="flex items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-base sm:text-lg text-foreground">Equipo Profesional</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Especialistas certificados en todas las áreas de la odontología
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-semibold text-primary">15+</span>
                        <span className="text-sm text-muted-foreground">años de experiencia</span>
                      </div>
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements - Compact square design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute -z-10 -top-8 -left-8 w-40 h-40" // Reduced from w-56 h-56
              >
                {/* Elegant square pattern with strong presence */}
                <div className="absolute inset-0 rounded-lg border-2 border-primary/40 dark:border-primary/60" />
                <div className="absolute inset-[12%] rounded-md border-2 border-primary/30 dark:border-primary/50" />
                <div className="absolute inset-[24%] rounded-sm border border-primary/20 dark:border-primary/40" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 dark:border-primary/70" />{" "}
                {/* Reduced from w-12 h-12 */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 dark:border-primary/70" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 dark:border-primary/70" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 dark:border-primary/70" />
                {/* Square accents */}
                <div className="absolute top-[15%] left-[15%] w-4 h-4 bg-primary/20 dark:bg-primary/30 rounded-sm" />{" "}
                {/* Reduced sizes */}
                <div className="absolute top-[25%] right-[25%] w-3 h-3 bg-primary/30 dark:bg-primary/40 rounded-sm" />
                <div className="absolute bottom-[20%] left-[30%] w-3 h-3 bg-primary/25 dark:bg-primary/35 rounded-sm" />
                {/* Background gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary/20 rounded-lg" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="absolute -z-10 -bottom-10 -right-10 w-56 h-56" // Reduced from w-80 h-80
              >
                {/* Modern professional square pattern */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 via-transparent to-primary/15 dark:from-primary/20 dark:to-primary/25 opacity-80" />
                <div className="absolute inset-0 rounded-lg border-2 border-primary/20 dark:border-primary/40" />
                <div className="absolute inset-[8%] rounded-md border border-primary/15 dark:border-primary/35" />
                <div className="absolute inset-[16%] rounded-sm border border-primary/10 dark:border-primary/30" />
                {/* Grid pattern suggesting precision */}
                <div className="absolute inset-[5%] grid grid-cols-3 grid-rows-3 gap-3">
                  {" "}
                  {/* Reduced grid */}
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-full h-full ${i % 3 === 0 ? "border border-primary/20 dark:border-primary/40 rounded-sm" : ""}`}
                    />
                  ))}
                </div>
                {/* Rotating square element suggesting dental technology */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
                  {" "}
                  {/* Reduced from w-20 h-20 */}
                  <div className="absolute inset-0 rounded-md border-2 border-dashed border-primary/30 dark:border-primary/50 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-[20%] rounded-sm bg-primary/15 dark:bg-primary/25" />
                </div>
                {/* Square accents */}
                <div className="absolute top-[10%] right-[10%] w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-sm" />{" "}
                {/* Reduced sizes */}
                <div className="absolute bottom-[15%] right-[20%] w-4 h-4 bg-primary/15 dark:bg-primary/25 rounded-sm" />
                <div className="absolute bottom-[25%] left-[15%] w-5 h-5 bg-primary/5 dark:bg-primary/15 rounded-sm" />
              </motion.div>

              {/* Additional decorative element with vertical lines - more compact */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -z-10 top-1/2 -translate-y-1/2 -left-4 w-20 h-72" // Reduced from w-28 h-96
              >
                {/* Vertical rectangular elements */}
                <div className="absolute left-0 top-0 h-full w-3 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 dark:via-primary/20 rounded-md" />{" "}
                {/* Reduced width */}
                <div className="absolute left-6 top-[5%] h-[90%] w-1.5 bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0 dark:via-primary/25 rounded-md" />
                <div className="absolute left-10 top-[10%] h-[80%] w-0.5 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 dark:via-primary/30 rounded-md" />
                {/* Square accents */}
                <div className="absolute left-2 top-[20%] w-2 h-2 bg-primary/20 dark:bg-primary/30 rounded-sm" />{" "}
                {/* Reduced sizes */}
                <div className="absolute left-7 top-[70%] w-1.5 h-1.5 bg-primary/25 dark:bg-primary/35 rounded-sm" />
                <div className="absolute left-11 top-[40%] w-1 h-1 bg-primary/30 dark:bg-primary/40 rounded-sm" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Comprometidos con tu{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">salud bucal</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"></span>
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                En BRODENT&apos;S, nuestra misión es proporcionar atención dental excepcional en un ambiente cómodo y
                acogedor. Fundada por el Dr. Roberto Méndez, nuestra clínica ha crecido hasta convertirse en un
                referente de la odontología moderna.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground leading-relaxed"
              >
                Nuestro equipo multidisciplinario trabaja en conjunto para ofrecer soluciones integrales que mejoren la
                salud y estética de tu sonrisa, utilizando las técnicas más avanzadas y materiales de primera calidad.
              </motion.p>
            </div>

            {/* Interactive feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={cn(
                    "relative overflow-hidden rounded-xl transition-all duration-300",
                    "border border-muted p-5 hover:border-primary/20",
                    "hover:shadow-[0_0_25px_rgba(0,0,0,0.05)]",
                    activeFeature === index ? "bg-gradient-to-br from-primary/5 to-transparent" : "bg-background/50",
                  )}
                >
                  <div className="relative z-10">
                    <div
                      className={cn(
                        "flex items-center gap-3 mb-3",
                        activeFeature === index ? "text-primary" : "text-foreground",
                      )}
                    >
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-colors duration-300",
                          activeFeature === index ? "bg-primary/20" : "bg-primary/10",
                        )}
                      >
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>

                  {/* Animated background decoration */}
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full -z-0"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* CTA section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-8 flex flex-col sm:flex-row gap-4 items-center"
            >
              <Button className="relative overflow-hidden group px-6 py-6" size="lg">
                <span className="relative z-10 flex items-center gap-2">
                  Conoce a nuestro equipo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-primary z-0 group-hover:translate-y-full transition-transform duration-300 ease-in-out" />
                <span className="absolute inset-0 bg-primary/90 z-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Button>

              <Button variant="outline" className="group border-primary/20 hover:border-primary/40 px-6 py-6" size="lg">
                <span className="flex items-center gap-2">
                  <span className="relative">
                    <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                    <span className="absolute top-0 left-0 w-full h-full rounded-full bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                  Agendar una cita
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
