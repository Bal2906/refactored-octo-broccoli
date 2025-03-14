"use client"

import { motion } from "framer-motion"

interface TeamFilterProps {
  specialties: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function TeamFilter({ specialties, activeFilter, onFilterChange }: TeamFilterProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h3
        className="text-xl font-medium mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Filtrar por especialidad
      </motion.h3>

      <motion.div
        className="relative flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary/60 rounded-full" />

        {specialties.map((specialty, index) => (
          <motion.button
            key={specialty}
            onClick={() => onFilterChange(specialty)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === specialty
                ? "text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
            whileHover={{
              scale: activeFilter === specialty ? 1.05 : 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 + index * 0.05 },
            }}
          >
            {activeFilter === specialty && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative z-10">{specialty}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  )
}

