import * as React from 'react';
import Link from "next/link"
import { Button } from '../Button';
import Image from 'next/image';


export const Navbar = () => {

    React.useEffect(() => {

        const handleScroll = () => {
            const nav = document.querySelector('header')
            const navHeight = nav.offsetHeight
            const scrollHeight = window.pageYOffset

            if (scrollHeight > navHeight) {
                nav.classList.add('sticky', 'top-0', 'bg-[rgba(255,255,255,0.01)]', 'z-50', 'backdrop-blur-sm')
            } else {
                nav.classList.remove('sticky', 'top-0', 'bg-[rgba(255,255,255,0.01)]', 'z-50', 'backdrop-blur-sm')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)


    }, [])


    return (
        <header className="">
            <div className="container flex items-center h-16 sm:h-28">
                <div className="flex items-center justify-between w-full">
                    {/* Logo... */}
                    <div className="relative">
                        <div className="relative text-green-400 z-10">
                            <Link href="/#home">
                                <h3 className='text-xl sm:text-2xl'>
                                    HRIDOY
                                </h3>
                            </Link>
                        </div>
                        <div className='absolute top-0 left-0 w-full bg-[rgba(0,255,0,0.3)] blur-[40px] h-full' />
                    </div>


                    {/* Nav links... */}
                    <nav className="hidden md:flex items-center ml-10 space-x-6">
                        <Link href="/#home" className="text-white/80 hover:text-green-500">
                            Home
                        </Link>

                        <Link href="/#about-section" className="text-white/80 hover:text-green-500">
                            About us
                        </Link>

                        <Link href="/#projects-section" className="text-white/80 hover:text-green-500">
                            Portfolios
                        </Link>

                        <Link href="/#contact-section" className="text-white/80 hover:text-green-500">
                            Contact us
                        </Link>

                        <Button className="bg-green-500/10 hover:bg-green-500/80" bgEffect='bg-green-500'>
                            <Link href="/">
                                Download CV
                            </Link>
                        </Button>
                    </nav>
                    {/* menu */}
                    <Button className="block md:hidden bg-green-500/10 hover:bg-green-500/80 text-sm" bgEffect='bg-green-500'>
                        <div className='flex items-center space-x-2'>
                            <Image src="/settings-sliders.svg" alt="" width={14} height={14} />
                            <span>Menu</span>
                        </div>
                    </Button>
                </div>
            </div>
        </header>
    )
}