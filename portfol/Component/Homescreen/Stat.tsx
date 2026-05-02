'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// ✅ Stats outside
const stats = [
    { number: 1, suffix: '+', label: 'Years Experience' },
    { number: 10, suffix: '+', label: 'Projects Completed' },
    { number: 2, suffix: '+', label: 'Companies Worked' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
]

export default function Stat() {
    const [counts, setCounts] = useState(stats.map(() => 0))
    const [started, setStarted] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    // 👀 Trigger when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    // 🔢 Smooth animation (better than setInterval)
    useEffect(() => {
        if (!started) return

        stats.forEach((stat, i) => {

            const duration = 2000
            const startTime = performance.now()

            const animate = (time: number) => {
                const progress = Math.min((time - startTime) / duration, 1)
                const value = Math.floor(progress * stat.number)

                setCounts((prev) => {
                    const updated = [...prev]
                    updated[i] = value
                    return updated
                })

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        })
    }, [started])

    return (
        <section
            ref={sectionRef}
            className="bg-[#0a0a1a] py-10 relative overflow-hidden px-6 md:px-16 lg:px-30"
        >
            {/* Background */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-700 rounded-full blur-[120px] opacity-30" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-600 rounded-full blur-[120px] opacity-30" />

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center mb-16 z-10 relative"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Stat{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        Section
                    </span>
                </h1>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '6rem' }}
                    transition={{ delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3"
                />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 z-10 relative">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#ffffff0d] border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500 transition-all duration-300"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            {counts[i]}
                            {stat.suffix}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}