import * as React from 'react';
import Image from "next/image"
import { GraphIcon } from '../components/GraphIcon';

const Hero = (_props, ref) => {
    return (
        <section id="hero-section" className="sm:py-10 md:py-0 relative block min-h-screen" ref={ref}>
            <div className="container relative h-full">
                <div className="flex flex-col justify-center min-h-screen">
                    <div className='-mt-24 sm:mt-0 md:-mt-20 lg:-mt-32'>
                        <div className="relative w-fit h-fit mb-3">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                                Hello, {"I'm"} <span className="text-green-500 ">Hridoy</span>
                            </h1>
                            <h1 className="-mt-10 w-full bg-[rgba(0,255,0,0.2)] blur-[40px]">
                                <span>Hello, {"I'm"}</span>
                            </h1>
                        </div>
                        <div className="mb-10 select-none">
                            <h2 className="text-lg sm:text-3xl mb-10">
                                <span className="text-green-500">a</span> Frontend Developer
                            </h2>

                            <p className="text-sm sm:text-base max-w-[650px] select-none">
                                Hi, {"I'm"} Mehedi Hasan Hridoy, Professional Web Designer with best experience over
                                4 years in React JS, Next JS, HTML5, CSS3, Javascript, JQuery. I build best quality,
                                user friendly and responsive custom websites.
                            </p>
                        </div>

                        <div className="block mt-3">
                            <span className="text-xs sm:text-sm font-medium">BEST SKILLS: </span>
                            <div className="flex items-center gap-6 mt-4">
                                {/* react js icon */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 group">
                                    <span className="absolute top-0 left-0 bg-sky-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                    <Image src="/react.svg" alt="" fill sizes="30px" />
                                </div>

                                {/*  next js icon */}
                                <div className="relative w-10 h-10 sm:w-14 sm:h-14 group">
                                    <span className="absolute top-0 left-0 bg-white block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                    <Image src="/nextjs-2.svg" alt="" fill sizes="30px" />
                                </div>

                                {/*  redux js icon */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 group">
                                    <span className="absolute top-0 left-0 bg-purple-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                    <Image src="/redux.svg" alt="" fill sizes="30px" />
                                </div>

                                {/*  tailwind css icon */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 group">
                                    <span className="absolute top-0 left-0 bg-sky-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                    <Image src="/tailwindcss-icon.svg" alt="" fill sizes="30px" />
                                </div>

                                {/*  scss icon */}
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10 group">
                                    <span className="absolute top-0 left-0 bg-pink-400 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                    <Image src="/sass.svg" alt="" fill sizes="30px" />
                                </div>
                            </div>
                        </div>

                        <GraphIcon className='w-48 h-48 md:w-72 md:h-72 absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-1' />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default React.forwardRef(Hero);