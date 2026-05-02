'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6'
export default function Footer() {
    const router = useRouter()

    return (
        <footer className="bg-[#0a0a1a] border-t border-white/10 py-16 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                {/* Left */}
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        Hammad <span className="text-purple-400">Satti</span>
                    </h1>
                    <p className="text-gray-400 text-sm mt-3">
                        Full Stack Developer & QA Tester  <br /> building modern web & mobile applications.
                    </p>
                </div>

                {/* Middle */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Quick Links</h2>

                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer" onClick={() => router.push('/')}>Home</li>
                        <li className="hover:text-white cursor-pointer" onClick={() => router.push('/projects')}>Projects</li>
                        <li className="hover:text-white cursor-pointer" onClick={() => router.push('/contact')}>Contact</li>
                        <li className="hover:text-white cursor-pointer" onClick={() => router.push('/services')}>Services</li>
                    </ul>
                </div>

                {/* Right */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Contact</h2>

                    <p className="text-gray-400 text-sm">
                        Email: hammadurrehman080@example.com
                    </p>

                    <p className="text-gray-400 text-sm mt-2">
                        Location: Rawalpindi Pakistan
                    </p>

                    {/* Social */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">

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

            </div>

            {/* Bottom line */}
            <div className="text-center text-gray-500 text-xs mt-12">
                © {new Date().getFullYear()} Hammad Satti. All rights reserved.
            </div>

        </footer>
    )
}