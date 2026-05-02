'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/skill', label: 'Skills' },
        { href: '/projects', label: 'Projects' },
        { href: '/services', label: 'Services' }, 
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 w-full bg-[#0a0a1a]/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-white hover:text-red-500">
                    MyPortfolio
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-white hover:text-red-500 font-medium transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col  gap-1.5 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black border-t px-6 py-4 flex flex-col justify-center items-center gap-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-white hover:text-red-500 font-medium text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}