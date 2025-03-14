"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"
import type { TeamMember } from "@/types/team"
import TeamMemberModal from "./team-member-modal"
import TeamFilter from "./team-filter"

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for previous
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(teamMembers)

  // Extract unique specialties from team members
  const specialties = ["Todos", ...Array.from(new Set(teamMembers.map((member) => member.specialty)))]

  // Filter team members when activeFilter changes
  useEffect(() => {
    if (activeFilter === "Todos") {
      setFilteredMembers(teamMembers)
    } else {
      setFilteredMembers(teamMembers.filter((member) => member.specialty === activeFilter))
    }
  }, [activeFilter, teamMembers])

  const openMemberDialog = (member: TeamMember, index: number) => {
    setSelectedMember(member)
    setCurrentIndex(index)
    setIsDialogOpen(true)
  }

  const navigateMember = (direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredMembers.length
        : (currentIndex - 1 + filteredMembers.length) % filteredMembers.length

    setDirection(direction === "next" ? 1 : -1)
    setCurrentIndex(newIndex)
    setSelectedMember(filteredMembers[newIndex])
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: i * 0.05,
        duration: 0.6,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
    exit: (i: number) => ({
      y: 30,
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
        delay: i * 0.03,
      },
    }),
  }

  return (
    <section id="equipo" className="py-16 md:py-24 mb-16 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
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
            ></motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold relative z-10">Nuestros Especialistas</h2>
          </div>
          <motion.div
            className="w-20 h-1 bg-primary/60 mx-auto rounded-full my-4 md:my-5"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <p className="text-sm sm:text-base text-muted-foreground px-4 max-w-xl mx-auto">
            Contamos con profesionales altamente cualificados y con amplia experiencia en todas las especialidades
            odontológicas.
          </p>
        </motion.div>

        {/* Filter Component */}
        <TeamFilter specialties={specialties} activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07 },
              },
            }}
          >
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="overflow-hidden rounded-xl cursor-pointer relative group"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                onClick={() => openMemberDialog(member, index)}
                layout
              >
                <motion.div
                  className="aspect-square h-full w-full relative overflow-hidden"
                  layoutId={`card-container-${member.id}`}
                >
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                    layoutId={`card-image-${member.id}`}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                    layoutId={`card-gradient-${member.id}`}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white z-10">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base text-white/80 mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.div
                      className="flex"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-primary mr-0.5" />
                      ))}
                    </motion.div>

                    {/* Specialty badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-primary/90 rounded-full text-xs font-medium text-white shadow-lg"
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      {member.specialty}
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      className="bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                    >
                      Ver perfil
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state when no specialists match the filter */}
        {filteredMembers.length === 0 && (
          <motion.div
            className="text-center py-16 bg-muted/30 rounded-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Star className="h-8 w-8 text-muted-foreground" />
              </div>
            </motion.div>
            <motion.p
              className="text-muted-foreground text-lg mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              No se encontraron especialistas en <span className="font-medium text-primary">{activeFilter}</span>
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground/80 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Prueba con otra especialidad o mira todos nuestros profesionales
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90"
                onClick={() => setActiveFilter("Todos")}
              >
                Ver todos los especialistas
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          member={selectedMember}
          currentIndex={currentIndex}
          direction={direction}
          teamMembers={filteredMembers}
          onNavigate={navigateMember}
        />
      )}
    </section>
  )
}
