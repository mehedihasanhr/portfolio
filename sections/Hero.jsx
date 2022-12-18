import * as React from 'react';
import Image from "next/image"
import { TicTocTieIcon } from '../components/TicTocTieIcon';
import { GraphIcon } from '../components/GraphIcon';

const Hero = (_props, ref) => {
    return (
        <section id="hero-section" className="" ref={ref}>
            <div className="container">
                <div className="flex flex-col justify-center -mt-20 h-screen">
                    <div className="relative w-fit h-fit mb-3">
                        <h1 className="text-6xl font-bold text-white">
                            Hello, {"I'm"} <span className="text-green-500 ">Hridoy</span>
                        </h1>
                        <h1 className="-mt-10 w-full bg-[rgba(0,255,0,0.2)] blur-[40px]">
                            <span>Hello, {"I'm"}</span>
                        </h1>
                    </div>
                    <div className="mb-10">
                        <h2 className="mb-10">
                            <span className="text-green-500">a</span> Frontend Developer
                        </h2>

                        <p className="max-w-[650px]">
                            Hi, {"I'm"} Mehedi Hasan Hridoy, Professional Web Designer with best experience over
                            4 years in React JS, Next JS, HTML5, CSS3, Javascript, JQuery. I build best quality,
                            user friendly and responsive custom websites.
                        </p>
                    </div>
                    {/* <Button>Download CV</Button> */}

                    <div className="block mt-3">
                        <span className="text-sm font-medium">BEST SKILLS: </span>
                        <div className="flex items-center gap-6 mt-4">
                            {/* react js icon */}
                            <div className="relative w-10 h-10 group">
                                <span className="absolute top-0 left-0 bg-sky-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                <Image src="/react.svg" alt="" fill sizes="30px" />
                            </div>

                            {/*  next js icon */}
                            <div className="relative w-14 h-14 group">
                                <span className="absolute top-0 left-0 bg-white block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                <Image src="/nextjs-2.svg" alt="" fill sizes="30px" />
                            </div>

                            {/*  redux js icon */}
                            <div className="relative w-10 h-10 group">
                                <span className="absolute top-0 left-0 bg-purple-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                <Image src="/redux.svg" alt="" fill sizes="30px" />
                            </div>

                            {/*  tailwind css icon */}
                            <div className="relative w-10 h-10 group">
                                <span className="absolute top-0 left-0 bg-sky-300 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                <Image src="/tailwindcss-icon.svg" alt="" fill sizes="30px" />
                            </div>

                            {/*  scss icon */}
                            <div className="relative w-10 h-10 group">
                                <span className="absolute top-0 left-0 bg-pink-400 block w-6 h-6 blur-[40px] group-hover:w-8 group-hover:h-8" />
                                <Image src="/sass.svg" alt="" fill sizes="30px" />
                            </div>
                        </div>
                    </div>

                    <GraphIcon className='w-72 h-72 absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2' />


                    <TicTocTieIcon
                        className='w-72 h-72 absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 hidden'
                        lineColor='#777'
                        circleColor='#777'
                        crossColor='#777'
                        croseLineColor='#777'
                    />
                </div>
            </div>
        </section>
    )
}
export default React.forwardRef(Hero);