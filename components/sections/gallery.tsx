"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", label: "Todos" },
  { id: "ortodoncia", label: "Ortodoncia" },
  { id: "implantes", label: "Implantes" },
  { id: "estetica", label: "Estética" },
]

const galleryItems = [
  {
    id: 1,
    category: "ortodoncia",
    title: "Brackets Tradicionales",
    description: "Tratamiento de ortodoncia con brackets metálicos",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    category: "ortodoncia",
    title: "Ortodoncia Invisible",
    description: "Alineadores transparentes para una sonrisa perfecta",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    category: "implantes",
    title: "Implante Unitario",
    description: "Reemplazo de un diente perdido con implante dental",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    category: "implantes",
    title: "Implantes Múltiples",
    description: "Rehabilitación completa con varios implantes",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    category: "estetica",
    title: "Blanqueamiento Dental",
    description: "Tratamiento de blanqueamiento profesional",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    category: "estetica",
    title: "Carillas Dentales",
    description: "Transformación con carillas de porcelana",
    imageBefore: "/placeholder.svg?height=300&width=300",
    imageAfter: "/placeholder.svg?height=300&width=300",
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [setSelectedItem] = useState(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="section-padding">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Galería de Casos
      </motion.h2>

      <Tabs defaultValue="all" className="mt-12" onValueChange={setActiveCategory}>
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="cursor-pointer group"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-square bg-muted">
                          <Image
                            src={item.imageAfter || "/placeholder.svg"}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold">{item.title}</h3>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2">Antes</h3>
                        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                          <Image
                            src={item.imageBefore || "/placeholder.svg"}
                            alt={`Antes - ${item.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Después</h3>
                        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                          <Image
                            src={item.imageAfter || "/placeholder.svg"}
                            alt={`Después - ${item.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p className="text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

