"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Clock, HeartPulse, Users } from "lucide-react"

const features = [
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Excelencia",
    description: "Más de 15 años de experiencia brindando servicios odontológicos de alta calidad.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Equipo Profesional",
    description: "Contamos con especialistas certificados en todas las áreas de la odontología.",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: "Atención Personalizada",
    description: "Tratamientos adaptados a las necesidades específicas de cada paciente.",
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Tecnología Avanzada",
    description: "Equipamiento de última generación para diagnósticos y tratamientos precisos.",
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/50 py-24 md:py-32">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Sobre Nosotros
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
            <Image
              src="/Images/team.jpg"
              alt="Equipo de BRODENT'S"
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full aspect-square md:aspect-video lg:aspect-square"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold">Comprometidos con tu salud bucal desde 2008</h3>

          <p className="text-muted-foreground">
            En BRODENT&apos;S, nuestra misión es proporcionar atención dental excepcional en un ambiente cómodo y
            acogedor. Fundada por el Dr. Roberto Méndez, nuestra clínica ha crecido hasta convertirse en un referente de
            la odontología moderna.
          </p>

          <p className="text-muted-foreground">
            Nuestro equipo multidisciplinario trabaja en conjunto para ofrecer soluciones integrales que mejoren la
            salud y estética de tu sonrisa, utilizando las técnicas más avanzadas y materiales de primera calidad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex gap-4 group hover:bg-background p-3 rounded-lg transition-colors"
              >
                <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

