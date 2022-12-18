import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { Button } from '../components/Button'
import { Input, Textarea } from '../components/Form'

const Contact = () => {
    return (
        <section className='contact-section' id='contact-section'>
            <div className='container py-32'>
                <div className='flex flex-col items-center justify-center mb-16'>
                    <div className='flex flex-col items-center mb-20'>
                        <div className='block w-fit relative mb-2.5' >
                            <span className='absolute top-0 left-0 w-full h-full bg-white blur-[100px]' />
                            <h3 className="font-bold">Contact <span className='text-green-500'>Me</span></h3>
                        </div>
                        <p className='text-gray-500 text-xs sm:text-base'>
                            --- a few recent design & coding projects ---
                        </p>
                    </div>

                    <div className='grid grid-cols-12 gap-6 sm:gap-8'>
                        <div className='p-8 border border-dashed border-gray-700 col-span-12 md:col-span-6 xl:col-span-4'>
                            <div className='flex gap-4'>
                                <div className='relative w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center'>
                                    <div className='absolute bg-green-500 blur-[70px] w-10 h-10' />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </div>

                                <div>
                                    <h3 className='font-bold text-base sm:text-lg text-green-500'>Phone</h3>
                                    <a
                                        target="_blank"
                                        rel="noopenner noreferrer"
                                        href='tel:+8801518309205'
                                        className='text-gray-500 hover:text-gray-400 text-sm sm:text-base'
                                    >
                                        (+880) 1518 309 205
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='p-8 border border-dashed border-gray-700 col-span-12 md:col-span-6 xl:col-span-4'>
                            <div className='flex gap-4'>
                                <div>
                                    <div className='relative w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center'>
                                        <div className='absolute bg-yellow-500 blur-[70px] w-10 h-10' />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                                        </svg>

                                    </div>
                                </div>

                                <div>
                                    <h3 className='font-bold text-base sm:text-lg text-yellow-500'>Email</h3>
                                    <a
                                        target="_blank"
                                        rel="noopenner noreferrer"
                                        href='mailto:mehedihasan.hr.324@gmail.com'
                                        className='text-gray-500 hover:text-gray-400 text-sm sm:text-base'
                                    >
                                        mehedihasan.hr.324@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className='p-8 border border-dashed border-gray-700 sm:col-span-12 col-span-12 xl:col-span-4'>
                            <div className='flex gap-4'>

                                <div>
                                    <div className='relative w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center'>
                                        <div className='absolute bg-pink-500 blur-[70px] w-10 h-10' />
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className='font-bold text-base sm:text-lg text-pink-500'>Location</h3>
                                    <p className='text-gray-500 text-sm sm:text-base'>Khailkur, Board Bazar, National University, Gazipur-1704</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
                        {/* contact form */}
                        <div className="col-span-1 md:col-span-8 lg:col-span-7 xl:col-span-8 lg:col-start-2 xl:col-start-1 ml-0 lg:ml-6 xl:ml-0">
                            <div className='flex flex-col items-center'>
                                <div className='w-full max-w-[600px]'>
                                    <div className='block w-fit relative mb-10' >
                                        <span className='absolute top-0 left-0 w-full h-full bg-white/80 blur-[100px]' />
                                        <h3 className="font-bold">Contact <span className='text-green-500'>Form</span></h3>
                                    </div>
                                    {/* form */}
                                    <form action="" className='w-full max-w-[600px] space-y-5'>
                                        <Input label="Name" placeholder="Full Name" />
                                        <Input label="Email" placeholder="Enter your Email" />
                                        <Textarea label="Message" placeholder="Write your message here..." />

                                        <Button type="submit" text="Send Message" className='bg-green-500/50' bgEffect='bg-green-500'>Send Message</Button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* map */}
                        <div className="col-span-4">
                            <div className='flex flex-col mt-3'>
                                <div className='w-full max-w-[600px]'>
                                    <div className='block w-fit relative mb-10' >
                                        <span className='absolute top-0 left-0 w-full h-full bg-green-500 blur-[100px]' />
                                        <h3 className="font-bold">Social <span className='text-green-500'>Links</span></h3>
                                    </div>

                                    <div>
                                        <ul className='flex flex-col gap-3'>
                                            <li className='flex gap-4 items-center mb-4'>
                                                <a href="#" target="_blank" rel="onopenner noreferrer" className='flex items-center space-x-3 hover:text-green-500'>
                                                    <Image src='/facebook.svg' alt='' width={30} height={30} />
                                                    <span>Facebook</span>
                                                </a>
                                            </li>


                                            <li className='flex gap-4 items-center mb-4'>
                                                <a href="#" target="_blank" rel="onopenner noreferrer" className='flex items-center space-x-3  hover:text-green-500'>
                                                    <Image src='/whatsapp.svg' alt='' width={30} height={30} />
                                                    <span>Whatsapp</span>
                                                </a>
                                            </li>


                                            <li className='flex gap-4 items-center mb-4'>
                                                <a href="#" target="_blank" rel="onopenner noreferrer" className='flex items-center space-x-3 hover:text-green-500'>
                                                    <Image src='/github.svg' alt='' width={30} height={30} />
                                                    <span>Github</span>
                                                </a>
                                            </li>

                                            <li className='flex gap-4 items-center mb-4'>
                                                <a href="#" target="_blank" rel="onopenner noreferrer" className='flex items-center space-x-3  hover:text-green-500'>
                                                    <Image src='/linkedin.svg' alt='' width={30} height={30} />
                                                    <span>Linkedin</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default React.forwardRef(Contact)