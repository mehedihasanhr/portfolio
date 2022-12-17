import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { Button } from '../components/Button'

const Projects = () => {
    return (
        <section className='projects-section'>
            <div className='container py-32'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center mb-20'>
                        <div className='block w-fit relative mb-2.5' >
                            <span className='absolute top-0 left-0 w-full h-full bg-green-500 blur-[100px]' />
                            <h3 className="font-bold">My <span className='text-green-500'>Portfolios</span></h3>
                        </div>
                        <p className='text-gray-500'>
                            --- a few recent design & coding projects ---
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-10 mb-20'>
                    {
                        [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className='col-span-4 opacity-90'>
                                <a target="_blank" rel="noopenner norefferer" href="#" className='group relative w-full h-full shadow-xl'>
                                    <div className='absolute w-32 h-32 bg-green-500 blur-[150px]' />
                                    <div className='relative min-w-full min-h-[300px]'>
                                        <Image src="/projects/Screenshot from 2022-12-17 23-10-37.png" alt="" fill />
                                    </div>
                                    <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center'>
                                        <div className="px-5 py-3">
                                            <h5> Tarulota </h5>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium at, aliquid, natus cum ducimus asperiores molestiae modi animi ipsum atque ullam expedita, nulla blanditiis doloribus iusto rerum cumque ut deleniti.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center justify-center w-full'>
                    <Button className='bg-green-500/10 hover:bg-green-500/70' bgEffect="bg-green-500">
                        <Link href="/" className='whitespace-nowrap'>
                            View More...
                        </Link>
                    </Button>
                </div>
            </div >
        </section >
    )
}

export default React.forwardRef(Projects)