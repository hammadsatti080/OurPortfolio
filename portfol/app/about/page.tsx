'use client'
import React, { useState } from 'react'

export default function About() {



    const tabs = ['About', 'Experience', 'Education']
    const [activeTab, setActiveTab] = useState('About')

    return (
        <section className="bg-[#0a0a1a] py-20 relative overflow-hidden h-160">

            {/* Background Glows */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-purple-700 rounded-full blur-[120px] opacity-30" />
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-600 rounded-full blur-[120px] opacity-30" />

            <div className="px-6 md:px-16 lg:px-30 z-10 relative">

                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <p className="text-purple-400 text-sm tracking-widest uppercase mb-2">Get To Know</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Me
                        </span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-3" />
                </div>


                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
                                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                                : 'border border-purple-500 text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="max-w-3xl mx-auto">

                    {/* About Tab */}
                    {activeTab === 'About' && (
                        <div className="text-center">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                                I am a{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
                                    MERN Stack Developer
                                </span>{' '}
                                and{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-semibold">
                                    Software & App Tester
                                </span>
                                . I have worked on different projects and have{' '}
                                <span className="text-white font-semibold">1 year of experience</span>{' '}
                                in development. My aim is to build user-friendly designs and web
                                applications that are modern, scalable, and efficient.
                            </p>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-8">
                                {[
                                    { label: '👤 Name', value: 'Hammad Ur Rehman' },
                                    { label: '📧 Email', value: 'hammadurrehman080@gmail.com' },
                                    { label: '📞 Phone', value: '+92-318-1536972' },
                                    { label: '📍 Location', value: 'Rawalpindi, Pakistan' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#ffffff0d] border border-purple-500/20 rounded-xl px-5 py-4 flex gap-3">
                                        <span className="text-purple-400 font-medium text-sm min-w-fit">{item.label}:</span>
                                        <span className="text-gray-300 text-sm">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Experience Tab */}
                    {activeTab === 'Experience' && (
                        <div className="flex flex-col gap-6">
                            {[
                                {
                                    role: 'Junior Software Quality Engineer',
                                    company: 'Jantrah Tech (Pvt.) Ltd.',
                                    duration: '4 Months – Present',
                                    desc: 'Manual testing, bug reporting, and ensuring software quality across multiple projects.',
                                },
                                {
                                    role: 'MERN Stack Developer',
                                    company: 'AimarkLab',
                                    duration: '3 Months',
                                    desc: 'Built full-stack web applications using MongoDB, Express, React, and Node.js.',
                                },
                            ].map((exp, i) => (
                                <div key={i} className="bg-[#ffffff0d] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                                        <span className="text-xs text-gray-500 bg-purple-500/10 px-3 py-1 rounded-full">{exp.duration}</span>
                                    </div>
                                    <p className="text-pink-400 text-sm mb-3">{exp.company}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education Tab */}
                    {activeTab === 'Education' && (
                        <div className="flex flex-col gap-6">
                            {[
                                {
                                    degree: 'BS Software Engineering',
                                    school: 'PMAS Arid Agriculture University',
                                    year: '2021 – 2025',
                                    desc: 'Studied core software engineering concepts including web development, databases, and software testing.',
                                },
                                {
                                    degree: 'F.Sc Pre-Engineering',
                                    school: 'APS Jhelum',
                                    year: '2019 – 2021',
                                    desc: 'Completed pre-engineering with focus on Mathematics and Physics.',
                                },
                                {
                                    degree: 'Matriculation (Science)',
                                    school: 'APS Alipur Islamabad',
                                    year: '2017 – 2019',
                                    desc: 'Completed matriculation with Science subjects.',
                                },
                            ].map((edu, i) => (
                                <div key={i} className="bg-[#ffffff0d] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                                        <span className="text-xs text-gray-500 bg-purple-500/10 px-3 py-1 rounded-full">{edu.year}</span>
                                    </div>
                                    <p className="text-pink-400 text-sm mb-3">{edu.school}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}