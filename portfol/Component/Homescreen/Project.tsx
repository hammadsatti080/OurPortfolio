'use client'
import React from 'react'
import Image from 'next/image'

const videoProjects = [
 
   {
    title: 'Ecommerence',
    image: '/Images/ecomerence.mp4',
    desc: 'Modern responsive system with clean UI and optimized performance.',
    link: 'https://ecommerence-bay.vercel.app/'
  },
  {
    title: 'School Management',
    image: '/Images/school.mp4',
    desc: 'Modern responsive system with clean UI and optimized performance.',
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

const imageProjects = [
  {
    title: 'Pharmacy Management',
    image: '/Images/H1.jpeg',
    desc: 'Full system for managing pharmacy operations with responsive UI.',
    link: 'https://pharmacy-website-eit4.vercel.app/'
  },
  {
    title: 'AI Mark Lab',
    image: '/Images/H4.jpeg',
    desc: 'AI-based project with modern UI and interactive components.',
    link: 'https://ai-mark-project-p4s3.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section className="bg-[#0a0a1a] py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-purple-400">Projects</span>
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {/* VIDEO PROJECTS */}
        {videoProjects.map((project, i) => (
          <div
            key={i}
            className="bg-[#111122] border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Video */}
            <div className="relative w-full h-40 overflow-hidden">
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
            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>

              <p className="text-gray-400 text-xs">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="mt-auto text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:scale-105 transition"
              >
                View Live
              </a>
            </div>
          </div>
        ))}

        {/* IMAGE PROJECTS */}
        {imageProjects.map((project, i) => (
          <div
            key={i}
            className="bg-[#111122] border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>

              <p className="text-gray-400 text-xs">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="mt-auto text-center py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:scale-105 transition"
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