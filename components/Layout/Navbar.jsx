import * as React from 'react';
import Link from "next/link"
import { Button } from '../Button';


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
            <div className="container flex items-center h-28">
                <div className="flex items-center justify-between w-full">
                    {/* Logo... */}
                    <div className="relative">
                        <div className="relative text-green-400">
                            <h3>HRIDOY</h3>
                        </div>
                        <div className='absolute top-0 left-0 w-full bg-[rgba(0,255,0,0.3)] blur-[40px] h-full' />
                    </div>


                    {/* Nav links... */}
                    <nav className="flex items-center ml-10 space-x-6">
                        <Link href="/" className="text-white/80 hover:text-green-500">
                            Home
                        </Link>

                        <Link href="/" className="text-white/80 hover:text-green-500">
                            Portfolios
                        </Link>

                        <Link href="/" className="text-white/80 hover:text-green-500">
                            About us
                        </Link>

                        <Link href="/" className="text-white/80 hover:text-green-500">
                            Contact us
                        </Link>

                        <Button className="bg-green-500/10 group-hover:bg-green-500/80" bgEffect='bg-green-500'>
                            {/* <Link href="/" className="text-green-500/80 hover:text-green-500 bg-white/5 px-3 py-1.5 rounded-md hover:bg-green-500/10 ">
                                Download CV
                            </Link> */}
                            <Link href="/">
                                Download CV
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}