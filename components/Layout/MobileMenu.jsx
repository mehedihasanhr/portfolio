import Link from 'next/link';
import { Button } from '../Button';
import { Footer } from './Footer';

export const MobileMenu = ({ isMenuOpen, close }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen md:hidden bg-black ${
                isMenuOpen ? 'opacity-1 pointer-events-auto z-[100]' : 'opacity-0 pointer-events-none -z-[100]'
            }`}
        >
            <div
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(03, 03, 03, 0.9), rgba(03,03,03,0.9)), url('/bg-image.png')`,
                    scrollBehavior: 'smooth',
                    height: '100vh',
                }}
            >
                <div className="flex flex-col justify-between items-center w-full h-full">
                    <div className="w-full">
                        <nav className="flex justify-between items-center px-4 py-3">
                            {/* Logo... */}
                            <div className="relative">
                                <div className="relative text-green-400 z-10">
                                    <Link href="/">
                                        <h3 className="text-xl sm:text-2xl">HRIDOY</h3>
                                    </Link>
                                </div>
                                <div className="absolute top-0 left-0 w-full bg-[rgba(0,255,0,0.3)] blur-[40px] h-full" />
                            </div>

                            <Button
                                ariaDescribedBy="menuCloseButton"
                                onClick={close}
                                className="flex items-center justify-center bg-green-500/10"
                                bgEffect="bg-green-400"
                            >
                                {/* crose  */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </Button>
                        </nav>

                        <ul className="w-full flex flex-col items-center py-10">
                            <li className="text-xl font-medium text-white/80 my-4">
                                <Link href="/" onMouseUp={() => (close ? close() : null)}>
                                    Home
                                </Link>
                            </li>

                            <li className="text-xl font-medium text-white/80 my-4">
                                <Link href="/#about-me" onMouseUp={() => (close ? close() : null)}>
                                    About Me
                                </Link>
                            </li>

                            <li className="text-xl font-medium text-white/80 my-4">
                                <Link href="/#portfolios" onMouseUp={() => (close ? close() : null)}>
                                    Portfolios
                                </Link>
                            </li>

                            <li className="text-xl font-medium text-white/80 my-4">
                                <Link href="/#contact-me" onMouseUp={() => (close ? close() : null)}>
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};
