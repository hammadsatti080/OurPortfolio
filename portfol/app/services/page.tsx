'use client'
import React from 'react'

const services = [
  {
    title: 'Web App Development',
    desc: 'Modern responsive web applications using React.js and Next.js.'
  },
  {
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps using React Native with smooth UI.'
  },
  {
    title: 'Manual Testing',
    desc: 'Manual testing to ensure proper functionality and user experience.'
  },
  {
    title: 'Automation Testing',
    desc: 'Automated testing scripts for faster and accurate QA process.'
  },
  {
    title: 'Bug Reporting & Test Cases',
    desc: 'Detailed bug reports and structured test cases for development.'
  }
]

export default function Services() {
  return (
    <section className="bg-[#0a0a1a] py-24 overflow-hidden h-200">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-purple-400">Services</span>
        </h1>
      </div>

      {/* Top Hanging Line */}
      <div className="w-full flex justify-center mb-12">
        <div className="w-[80%] h-[2px] bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-line"></div>
        </div>
      </div>

      {/* Hanging Cards Row */}
      <div className="flex justify-center">

        <div className="flex gap-8 animate-scroll">

          {services.map((item, i) => (
            <div
              key={i}
              className="relative w-52 h-56 bg-[#111122] border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center px-4 shadow-lg"
            >

              {/* Hanging string */}
              <div className="absolute -top-10 w-[2px] h-10 bg-white/30"></div>

              {/* Title */}
              <h3 className="text-white font-semibold text-sm mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @keyframes line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-line {
          animation: line 3s linear infinite;
        }
      `}</style>

    </section>
  )
}