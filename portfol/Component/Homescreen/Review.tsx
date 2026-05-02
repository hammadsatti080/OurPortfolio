'use client'
import React from 'react'

const reviews = [
    {
        name: 'Ali Ahmed',
        text: 'Amazing work! The portfolio design is very modern and clean. Really impressed with the UI and animations.',
        rating: 5
    },
    {
        name: 'Sara Khan',
        text: 'Very professional developer. The website performance and design quality are outstanding.',
        rating: 4
    },
    {
        name: 'Usman Tariq',
        text: 'Great attention to detail and smooth animations. Highly recommended for frontend work.',
        rating: 5
    },
    {
        name: 'Ayesha Malik',
        text: 'Creative and responsive designs. Everything looks premium and well structured.',
        rating: 5
    }
]

export default function Review() {
    return (
        <section className='bg-[#0a0a1a] py-10 relative overflow-hidden'>

            {/* background glow */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-700 rounded-full blur-[130px] opacity-30" />

            {/* heading */}
            <div className="flex flex-col items-center text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
                    <span className="text-3d-soft block">Here is our</span>
                    <br />
                    <span className="text-3d mt-4 block uppercase">Reviews</span>
                </h1>
            </div>

            {/* SCROLL LEFT -> RIGHT */}
            <div className="overflow-hidden w-full">
                <div className="flex gap-6 w-max animate-scroll px-6">
                    {[...reviews, ...reviews].map((r, i) => (
                        <div
                            key={i}
                            className="w-[280px] flex-shrink-0 bg-[#111122] border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
                        >
                            <div className="text-yellow-400 text-lg mb-3">
                                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                            </div>

                            <p className="text-gray-300 text-sm mb-4">
                                {r.text}
                            </p>

                            <h3 className="text-white font-semibold">
                                - {r.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .text-3d-soft {
          display: inline-block;
          color: white;
          animation: float3d 4s infinite ease-in-out;
          text-shadow: 0 4px 15px rgba(236,72,153,0.25);
        }

        .text-3d {
          display: inline-block;
          color: transparent;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          animation: rotate3d 4s infinite ease-in-out;
          text-shadow: 0 5px 20px rgba(168,85,247,0.4);
        }

        @keyframes rotate3d {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          50% { transform: rotateX(-15deg) rotateY(20deg); }
          100% { transform: rotateX(15deg) rotateY(0deg); }
        }

        @keyframes float3d {
          0% { transform: translateY(0px) rotateX(10deg); }
          50% { transform: translateY(-8px) rotateX(-10deg); }
          100% { transform: translateY(0px) rotateX(10deg); }
        }

        @keyframes scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>

        </section>
    )
}