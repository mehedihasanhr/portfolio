import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Footer, MobileMenu, Navbar } from '../components/Layout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <Head>
                <title>Hridoy</title>
            </Head>
            <main className={`${inter.className}`} id="home">
                <MobileMenu isMenuOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
                <Navbar isMenuOpen={isMenuOpen} open={() => setIsMenuOpen(true)} />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
