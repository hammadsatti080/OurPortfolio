'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Contactsec() {
  const router = useRouter()

  return (
    <div className="bg-[#0a0a1a] flex flex-col items-center py-10 px-6">

      {/* 🔥 3D Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        style={{ perspective: 1000 }}
      >
        <motion.span
          animate={{ rotateX: [0, 15, -15, 0], rotateY: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-block"
        >
      <span className='text-white'> Services </span>
        </motion.span>
      </motion.h1>

      {/* Main Box */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
        className="relative w-full max-w-3xl h-28 rounded-xl border border-white/20 flex items-center justify-between px-6 bg-[#111122] shadow-lg"
        style={{ perspective: 1000 }}
      >

        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 text-white">
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-2xl"
          >
            ➜
          </motion.span>

          <motion.h1
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-lg font-semibold"
          >
            Let’s work together
          </motion.h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-2">

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            className="px-5 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          >
            Contact
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/services')}
            className="px-5 py-2 text-sm rounded-lg border border-white/20 text-white hover:bg-white/10"
          >
            Services
          </motion.button>

        </div>

      </motion.div>
    </div>
  )
}