"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, Sparkles, SmileIcon as Tooth, Stethoscope, Baby, Syringe } from "lucide-react"

const services = [
  {
    icon: <Tooth className="h-10 w-10 text-primary" />,
    title: "Limpieza Dental",
    description: "Eliminamos la placa bacteriana y el sarro para prevenir caries y enfermedades periodontales.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Blanqueamiento",
    description: "Devuelve el brillo natural a tus dientes con nuestros tratamientos de blanqueamiento profesional.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Ortodoncia",
    description: "Corregimos la alineación de tus dientes con brackets tradicionales o invisibles.",
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "Endodoncia",
    description: "Tratamiento de conducto para eliminar infecciones y salvar dientes severamente dañados.",
  },
  {
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: "Odontopediatría",
    description: "Cuidamos la salud bucal de los más pequeños con un enfoque amigable y preventivo.",
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: "Implantes Dentales",
    description: "Reemplazamos dientes perdidos con implantes de titanio que se integran al hueso maxilar.",
  },
]

export default function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="section-padding py-24 md:py-32">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Nuestros Servicios
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Procedimientos de última generación</li>
                  <li>Atención personalizada</li>
                  <li>Resultados garantizados</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

