'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6'
export default function Header() {

  // ✅ CV Download Function
  const handlecv = () => {
    const link = document.createElement('a')
    link.href = '/Images/HammadSatti.pdf'
    link.download = 'HammadSatti.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ✅ Contact Button Function
  const router = useRouter()
  const handlecontact = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center px-6 md:px-16 lg:px-30 relative overflow-hidden">

      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-purple-700 rounded-full blur-[120px] opacity-40" />
      <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-pink-600 rounded-full blur-[120px] opacity-40" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 py-20 md:py-0 z-10">

        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-purple-400 text-sm md:text-lg mb-2 tracking-widest uppercase">
            Welcome to my portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi! I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Hammad Satti
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-purple-300 font-medium mt-3">
            MERN Stack Developer
          </h2>

          <p className="text-gray-400 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            I build modern, responsive and scalable web applications
            using MongoDB, Express, React and Node.js.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={handlecv}
              className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#0a0a1a] transition-all duration-300 text-sm md:text-base"
            >
              Download CV
            </button>
            <button
              onClick={handlecontact}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:opacity-80 transition-all duration-300 text-sm md:text-base"
            >
              Contact Me
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">

            <a href="https://github.com/hammadsatti080"        // ← Apna GitHub link
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-purple-500 flex items-center justify-center text-white hover:bg-purple-700 transition-all duration-300">
              <FaGithub size={18} />
            </a>

            <a href="https://www.linkedin.com/posts/hammad-satti-537a20222_another-project-of-school-management-system-ugcPost-7455591170702802946-GKqR?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADgJPPsBuBFqQ-bQEBgRh5rdjvwiIzVN-Ms&utm_campaign=copy_link"   // ← Apna LinkedIn link
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-purple-500 flex items-center justify-center text-white hover:bg-purple-700 transition-all duration-300">
              <FaLinkedin size={18} />
            </a>


            <a href="https://youtube.com/shorts/lM3wn1gOz14?si=kwo8FuuuYvDlRVVo"       // ← Apna YouTube link
              target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-purple-500 flex items-center justify-center text-white hover:bg-purple-700 transition-all duration-300">
              <FaYoutube size={18} />
            </a>

          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-purple-500 shadow-[0_0_60px_#7c3aed] overflow-hidden">
            <Image
              src="/Images/DP.jpeg"
              alt="Hammad Satti"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  )
}