"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, GraduationCap, Award, ExternalLink, ChevronLeft, ChevronRight, Star } from "lucide-react"
import type { TeamMember } from "@/types/team"

interface TeamMemberModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  member: TeamMember
  currentIndex: number
  direction: number
  teamMembers: TeamMember[]
  onNavigate: (direction: "next" | "prev") => void
}

export default function TeamMemberModal({
  isOpen,
  onOpenChange,
  member,
  currentIndex,
  direction,
  teamMembers,
  onNavigate,
}: TeamMemberModalProps) {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-xl border-none max-h-[90vh] md:max-h-[80vh]">
            <DialogTitle className="sr-only">Perfil de {member.name}</DialogTitle>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Estilizamos el botón de cierre por defecto */}
              <style jsx global>{`
                [data-radix-popper-content-wrapper] [data-radix-dialog-close] {
                  position: absolute !important;
                  top: 16px !important;
                  right: 16px !important;
                  z-index: 50 !important;
                  border-radius: 9999px !important;
                  background-color: rgba(0, 0, 0, 0.4) !important;
                  backdrop-filter: blur(4px) !important;
                  color: white !important;
                  padding: 6px !important;
                  transition: background-color 0.2s !important;
                  opacity: 1 !important;
                }
                
                [data-radix-popper-content-wrapper] [data-radix-dialog-close]:hover {
                  background-color: rgba(0, 0, 0, 0.6) !important;
                }
                
                [data-radix-popper-content-wrapper] [data-radix-dialog-close] svg {
                  height: 20px !important;
                  width: 20px !important;
                }
              `}</style>

              <div className="md:grid md:grid-cols-2 gap-0">
                {/* Imagen de perfil - Visible solo en pantallas medianas y grandes */}
                <div className="relative md:h-full hidden md:block">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={`image-${member.id}`}
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                    >
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.profileImage || member.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                          <p className="text-white/90">{member.role}</p>
                          <div className="mt-3 flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                              ))}
                            </div>
                            <span className="text-xs text-white/80 ml-2">5.0</span>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Contenido del perfil - Mejorado para móviles */}
                <div className="bg-white dark:bg-background flex flex-col max-h-[80vh]">
                  <div className="p-6 pb-0 md:hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={`mobile-header-${member.id}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="flex items-center"
                      >
                        <Avatar className="h-16 w-16 border-4 border-primary/20 mr-4">
                          <AvatarImage src={member.profileImage || member.image} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-bold">{member.name}</h3>
                          <p className="text-muted-foreground">{member.role}</p>
                          <div className="mt-1 flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-primary fill-primary" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Contenido scrollable */}
                  <div className="p-6 overflow-y-auto">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={`content-${member.id}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                        className="space-y-6"
                      >
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-primary">Biografía</h4>
                          <p className="text-muted-foreground">{member.bio}</p>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                            Formación
                          </h4>
                          <ul className="space-y-2 text-muted-foreground pl-2">
                            {member.education.map((edu, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                              >
                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                                </div>
                                {edu}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h4 className="text-lg font-semibold mb-2 flex items-center">
                            <Award className="h-5 w-5 mr-2 text-primary" />
                            Reconocimientos
                          </h4>
                          <ul className="space-y-2 text-muted-foreground pl-2">
                            {member.awards.map((award, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                              >
                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                                </div>
                                {award}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="mb-6"
                        >
                          <h4 className="text-lg font-semibold mb-2 text-primary">Contacto</h4>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <Mail className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{member.contact.email}</span>
                            </motion.div>
                            <motion.div
                              className="flex items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                                <Phone className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{member.contact.phone}</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="p-4 border-t border-border mt-auto sticky bottom-0 bg-white dark:bg-background z-40 shadow-md">
                    <div className="flex items-center justify-between gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-lg border-primary/20 hover:bg-primary/5"
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate("prev")
                        }}
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Anterior
                      </Button>

                      <Button
                        className="flex-[2] bg-primary hover:bg-primary/90 text-white"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Agendar cita
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-lg border-primary/20 hover:bg-primary/5"
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate("next")
                        }}
                      >
                        Siguiente
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicadores de navegación */}
              <div className="absolute top-4 left-4 z-30 flex space-x-1">
                {teamMembers.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`h-1.5 rounded-full ${currentIndex === idx ? "w-6 bg-primary" : "w-1.5 bg-white/50"}`}
                    initial={false}
                    animate={{ width: currentIndex === idx ? 24 : 6 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

