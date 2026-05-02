'use client'
import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const swing: Variants = {
    animate: {
        rotate: [-3, 3, -3],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1]
        }
    }
}

const cards = [
    {
        title: 'Frontend',
        skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'React Native'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Database',
        skills: ['MongoDB'],
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Version Control',
        skills: ['GitHub'],
        color: 'from-orange-500 to-yellow-500'
    }
]

export default function Skill() {
    return (
        <section className="bg-[#0a0a1a] py-10 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-700 rounded-full blur-[130px] opacity-30" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-600 rounded-full blur-[130px] opacity-30" />

            {/* Heading */}
            <div className="text-center mb-16">
                <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">
                    What I Know
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
                </h1>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 mt-4 rounded-full" />
            </div>

            {/* ===== DESKTOP SINGLE LINE ===== */}
            <div className="hidden md:block relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[3px] bg-white rounded-full" />

                <div className="flex justify-center gap-10 pt-0">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={swing}
                            animate="animate"
                            className="relative w-64 flex flex-col items-center"
                        >
                            <div className="w-[2px] h-16 bg-white" />

                            <div className="bg-[#111122] border border-white/10 rounded-2xl p-6 shadow-xl text-center hover:scale-105 transition-transform duration-300">
                                <h2 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}>
                                    {card.title}
                                </h2>

                                <div className="flex flex-wrap justify-center gap-2 ">
                                    {card.skills.map((skill, i) => (
                                        <span key={i} className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ===== MOBILE 2 LINES (2 CARDS EACH) ===== */}
            <div className="md:hidden relative flex flex-col gap-10">

                {/* line 1 */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-white rounded-full" />
                    <div className="grid grid-cols-2 gap-6 pt-0">
                        {cards.slice(0, 2).map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={swing}
                                animate="animate"
                                className="flex flex-col items-center"
                            >
                                <div className="w-[2px] h-12 bg-white" />

                                <div className="bg-[#111122] border border-white/10 rounded-2xl p-4 shadow-xl text-center">
                                    <h2 className={`text-sm font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}>
                                        {card.title}
                                    </h2>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {card.skills.map((skill, i) => (
                                            <span key={i} className="text-[10px] bg-white/10 text-white px-2 py-1 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* line 2 */}
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-white rounded-full" />
                    <div className="grid grid-cols-2 gap-6 pt-0">
                        {cards.slice(2, 4).map((card, idx) => (
                            <motion.div
                                key={idx}
                                variants={swing}
                                animate="animate"
                                className="flex flex-col items-center"
                            >
                                <div className="w-[2px] h-12 bg-white" />

                                <div className="bg-[#111122] border border-white/10 rounded-2xl p-4 shadow-xl text-center">
                                    <h2 className={`text-sm font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${card.color}`}>
                                        {card.title}
                                    </h2>
                                    <div className="flex flex-wrap justify-center gap-1">
                                        {card.skills.map((skill, i) => (
                                            <span key={i} className="text-[10px] bg-white/10 text-white px-2 py-1 rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}