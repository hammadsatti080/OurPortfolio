'use client'
import React from 'react'
import Image from 'next/image'

const projects = [
    
    {
    title: 'Ecommerence',
    image: '/Images/ecomerence.mp4',
    desc: 'Modern responsive system with clean UI and optimized performance.',
    link: 'https://ecommerence-bay.vercel.app/'
  },
    {
        title: 'School Management ',
        image: '/Images/school.mp4',
        desc: 'Modern responsive portfolio built with React.js, Tailwind CSS, and smooth animations.',
        link: 'https://school-frontend-hazel.vercel.app/'
    },
 
   {
        title: 'Panjpeer Website',
     image: '/Images/Panjpeer.mp4',
        desc: 'Modern responsive portfolio built with React.js, Tailwind CSS, and smooth animations.',
        link: 'https://panjpeer-frontendcode.vercel.app/'
    },
 {
    title: 'Arid GPA / CGPA Calculator',
     image: '/Images/cgpa.jpeg',
    desc: 'Modern responsive portfolio built with Next.js, Tailwind CSS, and smooth animations.',
    link: 'https://cgpa-calculator-eta-six.vercel.app/'
  },
]
const project = [
    {
        title: 'Pharmacy management',
        image: '/Images/H1.jpeg',
        desc: 'Modern responsive portfolio built with React.js, Tailwind CSS, and smooth animations.',
        link: 'https://pharmacy-website-eit4.vercel.app/'
    },
    {
        title: 'Ai Mark lab',
        image: '/Images/H2.jpeg',
        desc: 'Modern responsive portfolio built with React.js, Tailwind CSS, and smooth animations.',
        link: 'https://ai-mark-project-p4s3.vercel.app/'
    }
]

export default function Projects() {
    return (
        <section className="bg-[#0a0a1a] py-24 px-6">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    My <span className="text-purple-400">Projects</span>
                </h1>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-[#111122] border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >

                        {/* Image */}

                        <div className="relative w-full h-56">
                            <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                        </div>



                        {/* Content */}
                        <div className="p-6 flex flex-col gap-4">

                            <h2 className="text-xl font-semibold text-white">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-sm">
                                {project.desc}
                            </p>

                            {/* Button */}
                            <a
                                href={project.link}
                                target="_blank"
                                className="mt-auto inline-block text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition"
                            >
                                View Live
                            </a>

                        </div>

                    </div>
                ))}
                {project.map((projects, i) => (
                    <div
                        key={i}
                        className="bg-[#111122] border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >

                        {/* Image */}


                        <div className="relative w-full h-56">
                            <Image
                                src={projects.image}
                                alt={projects.title}
                                fill
                                className="object-cover"
                            />

                        </div>



                        {/* Content */}
                        <div className="p-6 flex flex-col gap-4">

                            <h2 className="text-xl font-semibold text-white">
                                {projects.title}
                            </h2>

                            <p className="text-gray-400 text-sm">
                                {projects.desc}
                            </p>

                            {/* Button */}
                            <a
                                href={projects.link}
                                target="_blank"
                                className="mt-auto inline-block text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition"
                            >
                                View Live
                            </a>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}