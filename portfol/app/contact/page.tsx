'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

    const validate = () => {
        const newErrors: typeof errors = {}

        if (!form.name.trim()) newErrors.name = 'Name is required'
        else if (form.name.trim().length < 3) newErrors.name = 'Name must be at least 3 characters'

        if (!form.email.trim()) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format'

        if (!form.message.trim()) newErrors.message = 'Message is required'
        else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('')

        if (!validate()) return

        setLoading(true)

        setTimeout(() => {
            console.log('Contact Form Data:', form)
            setStatus('Message submitted successfully!')
            setForm({ name: '', email: '', message: '' })
            setErrors({})
            setLoading(false)
        }, 1000)
    }

    return (
        <section className="bg-[#0a0a1a] py-24 text-white relative overflow-hidden">

            {/* background glow */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 blur-[120px] opacity-30 rounded-full" />

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <h1 className="text-4xl md:text-5xl font-bold">
                    Contact <span className="text-purple-400">Me</span>
                </h1>
                <p className="text-gray-400 mt-2">Let us build something together</p>
            </motion.div>

            {/* form */}
            <motion.form
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto bg-[#111122] p-8 rounded-2xl border border-white/10 space-y-6"
            >
                {/* NAME */}
                <div>
                    <label className="block mb-2 text-sm text-white font-medium">Name</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#0b0b1a] border border-white/20 text-white outline-none focus:border-purple-500"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                    <label className="block mb-2 text-sm text-white font-medium">Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-[#0b0b1a] border border-white/20 text-white outline-none focus:border-purple-500"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="block mb-2 text-sm text-white font-medium">Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-3 rounded-lg bg-[#0b0b1a] border border-white/20 text-white outline-none focus:border-purple-500"
                        placeholder="Write your message"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

                {/* STATUS */}
                {status && (
                    <p className="text-center text-sm text-green-400">
                        {status}
                    </p>
                )}
            </motion.form>
        </section>
    )
}