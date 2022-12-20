import Image from 'next/image';
import * as React from 'react';
import { Skill } from '../components/Skill';

const About = (props, ref) => {
    const aboutRef = React.useRef(null);

    return (
        <section id="about-me" className="relative" ref={aboutRef}>
            <div className="container text-left">
                <div className="sm:py-28 md:py-32">
                    <div className="grid grid-cols-12 gap-8 sm:gap-10">
                        <div className="md:col-span-12 lg:col-span-5 xl:col-span-4">
                            <div className="relative w-80 h-80 md:w-[379px] md:h-[379px] px-5 flex items-center justify-center">
                                <div className="absolute top-0 left-0 w-full h-full ">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 369 369"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M364 0H353V5H364V16H369L369 5V0H364Z"
                                            fill="#333"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M364 0H353V5H364V16H369L369 5V0H364Z"
                                            fill="#333"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5 0H16V5H5V16H9.53674e-07L0 5V0H5Z"
                                            fill="#333"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M364 369H353V364H364V353H369L369 364V369H364Z"
                                            fill="#333"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5 369H16V364H5V353H9.53674e-07L0 364V369H5Z"
                                            fill="#333"
                                        />
                                        <rect
                                            width="16"
                                            height="5"
                                            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 369 183)"
                                            fill="#333"
                                        />
                                        <rect
                                            width="16"
                                            height="5"
                                            transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 5 183)"
                                            fill="#333"
                                        />
                                        <rect width="16" height="5" transform="matrix(1 0 0 -1 177 5)" fill="#333" />
                                        <rect width="16" height="5" transform="matrix(1 0 0 -1 177 369)" fill="#333" />
                                        <rect x="2.5" y="2.5" width="364" height="364" stroke="#333" />
                                    </svg>
                                </div>
                                <div className="relative w-80 h-80 md:w-[345px]  md:h-[369px] opacity-90">
                                    <div className="w-20 h-20 absolute top-0 left-10 bg-white blur-[100px]" />
                                    <Image src="/edited.png" alt="" fill />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
                            <div className="block w-fit relative mb-10">
                                <span className="absolute top-0 left-0 w-full h-full bg-white blur-[100px]" />
                                <h3 className="font-bold">
                                    About <span className="text-green-500">Me</span>
                                </h3>
                            </div>
                            <p className="text-sm sm:text-base leading-[22px] mb-8 w-full max-w-[600px]">
                                Hi, {"I'm"} a Professional Web Designer with best experience over 4 years in{' '}
                                <span className="text-green-500 font-medium">React JS</span>,{' '}
                                <span className="text-green-500 font-medium">Next JS</span>,{' '}
                                <span className="text-green-500 font-medium"> Redux </span>,{' '}
                                <span className="text-green-500 font-medium">HTML5</span>,{' '}
                                <span className="text-green-500 font-medium">CSS3</span>. I build best quality, user
                                friendly and responsive custom websites.
                            </p>

                            <div className="flex flex-col space-y-3">
                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">Name :</span>
                                    <span className="sm:ml-2 px-1.5"> Md Mehedi Hasan Hridoy</span>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">Date of birth :</span>
                                    <span className="sm:ml-2 px-1.5"> 12 December, 1999</span>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">Mobile :</span>
                                    <a
                                        tabIndex={-1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="tel:+8801518309205"
                                        className="sm:ml-2 px-1.5 hover:text-gray-400"
                                    >
                                        {' '}
                                        (+880) 151-830-9205
                                    </a>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">Email :</span>
                                    <a
                                        tabIndex={-1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto:mehedihasan.hr.324@gmail.com"
                                        className="sm:ml-2 px-1.5 hover:text-gray-400"
                                    >
                                        {' '}
                                        mehedihasan.hr.324@gmail.com{' '}
                                    </a>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">Linked in :</span>
                                    <a
                                        tabIndex={-1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="www.linkedin.com/in/mehedihasan-hr"
                                        className="sm:ml-2 px-1.5 hover:text-gray-400"
                                    >
                                        {' '}
                                        www.linkedin.com/in/mehedihasan-hr{' '}
                                    </a>
                                </div>

                                {/* github */}
                                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                                    <span className="pr-1.5 font-medium">GitHub :</span>
                                    <a
                                        tabIndex={-1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/mehedihasanhr"
                                        className="sm:ml-2 px-1.5 hover:text-gray-400"
                                    >
                                        https://github.com/mehedihasanhr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div className="py-16 sm:py-24 md:py-32 text-center">
                    <div className="block w-fit mx-auto relative mb-16">
                        <span className="absolute top-0 left-0 w-full h-full bg-white blur-[100px]" />
                        <h3 className="font-bold">
                            My <span className="text-green-500">Skills</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-10 max-w-[1080px] mx-auto">
                        {/* front-end skill */}
                        <div className="col-span-3 sm:col-span-1">
                            <div className="flex flex-col space-y-5 px-5">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 18.75C5.17875 18.75 1.25 14.8212 1.25 10C1.25 5.17875 5.17875 1.25 10 1.25C14.8212 1.25 18.75 5.17875 18.75 10C18.75 14.8212 14.8212 18.75 10 18.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 3.75C6.875 3.75 4.375 6.25 4.375 9.375C4.375 12.5 6.875 15 10 15C13.125 15 15.625 12.5 15.625 9.375C15.625 6.25 13.125 3.75 10 3.75ZM10 13.75C7.5 13.75 5.625 11.875 5.625 9.375C5.625 6.875 7.5 5 10 5C12.5 5 14.375 6.875 14.375 9.375C14.375 11.875 12.5 13.75 10 13.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 6.25C8.4375 6.25 7.1875 7.5 7.1875 9.0625C7.1875 10.625 8.4375 11.875 10 11.875C11.5625 11.875 12.8125 10.625 12.8125 9.0625C12.8125 7.5 11.5625 6.25 10 6.25ZM10 10.625C9.375 10.625 8.75 9.9375 8.75 9.0625C8.75 8.1875 9.375 7.5 10 7.5C10.625 7.5 11.25 8.1875 11.25 9.0625C11.25 9.9375 10.625 10.625 10 10.625Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="font-bold">Frontend</h4>
                                </div>
                                <div className="px-14 relative">
                                    {/* horizontal line */}
                                    <div className="h-full w-[2px] bg-green-500/70 absolute" />

                                    <Skill lang="HTML 5" />
                                    <Skill lang="React JS" />
                                    <Skill lang="Next JS" />
                                    <Skill lang="Redux JS" />
                                    <Skill lang="Typescript" />
                                </div>
                            </div>
                        </div>

                        {/* stylesheet skill */}
                        <div className="col-span-3 sm:col-span-1">
                            <div className="flex flex-col space-y-5 px-5">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 18.75C5.17875 18.75 1.25 14.8212 1.25 10C1.25 5.17875 5.17875 1.25 10 1.25C14.8212 1.25 18.75 5.17875 18.75 10C18.75 14.8212 14.8212 18.75 10 18.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 3.75C6.875 3.75 4.375 6.25 4.375 9.375C4.375 12.5 6.875 15 10 15C13.125 15 15.625 12.5 15.625 9.375C15.625 6.25 13.125 3.75 10 3.75ZM10 13.75C7.5 13.75 5.625 11.875 5.625 9.375C5.625 6.875 7.5 5 10 5C12.5 5 14.375 6.875 14.375 9.375C14.375 11.875 12.5 13.75 10 13.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 6.25C8.4375 6.25 7.1875 7.5 7.1875 9.0625C7.1875 10.625 8.4375 11.875 10 11.875C11.5625 11.875 12.8125 10.625 12.8125 9.0625C12.8125 7.5 11.5625 6.25 10 6.25ZM10 10.625C9.375 10.625 8.75 9.9375 8.75 9.0625C8.75 8.1875 9.375 7.5 10 7.5C10.625 7.5 11.25 8.1875 11.25 9.0625C11.25 9.9375 10.625 10.625 10 10.625Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="font-bold">Stylesheet</h4>
                                </div>
                                <div className="px-14 relative">
                                    {/* horizontal line */}
                                    <div className="h-full w-[2px] bg-yellow-500/70 absolute" />

                                    <Skill
                                        lang="CSS 3"
                                        blurColor="bg-yellow-500"
                                        lineColor="border-yellow-500/70"
                                        dotColor="border-yellow-500"
                                    />
                                    <Skill
                                        lang="SCSS"
                                        blurColor="bg-yellow-500"
                                        lineColor="border-yellow-500/70"
                                        dotColor="border-yellow-500"
                                    />
                                    <Skill
                                        lang="Bootstrap 5"
                                        blurColor="bg-yellow-500"
                                        lineColor="border-yellow-500/70"
                                        dotColor="border-yellow-500"
                                    />
                                    <Skill
                                        lang="Tailwind CSS"
                                        blurColor="bg-yellow-500"
                                        lineColor="border-yellow-500/70"
                                        dotColor="border-yellow-500"
                                    />
                                    <Skill
                                        lang="Styled Component"
                                        blurColor="bg-yellow-500"
                                        lineColor="border-yellow-500/70"
                                        dotColor="border-yellow-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Back-end skill */}
                        <div className="col-span-3 sm:col-span-1">
                            <div className="flex flex-col space-y-5 px-5">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-500">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10 18.75C5.17875 18.75 1.25 14.8212 1.25 10C1.25 5.17875 5.17875 1.25 10 1.25C14.8212 1.25 18.75 5.17875 18.75 10C18.75 14.8212 14.8212 18.75 10 18.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 3.75C6.875 3.75 4.375 6.25 4.375 9.375C4.375 12.5 6.875 15 10 15C13.125 15 15.625 12.5 15.625 9.375C15.625 6.25 13.125 3.75 10 3.75ZM10 13.75C7.5 13.75 5.625 11.875 5.625 9.375C5.625 6.875 7.5 5 10 5C12.5 5 14.375 6.875 14.375 9.375C14.375 11.875 12.5 13.75 10 13.75Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M10 6.25C8.4375 6.25 7.1875 7.5 7.1875 9.0625C7.1875 10.625 8.4375 11.875 10 11.875C11.5625 11.875 12.8125 10.625 12.8125 9.0625C12.8125 7.5 11.5625 6.25 10 6.25ZM10 10.625C9.375 10.625 8.75 9.9375 8.75 9.0625C8.75 8.1875 9.375 7.5 10 7.5C10.625 7.5 11.25 8.1875 11.25 9.0625C11.25 9.9375 10.625 10.625 10 10.625Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <h4 className="font-bold">Backend</h4>
                                </div>
                                <div className="px-14 relative">
                                    {/* horizontal line */}
                                    <div className="h-full w-[2px] bg-purple-500/70 absolute" />

                                    <Skill
                                        lang="Express JS"
                                        blurColor="bg-purple-500"
                                        lineColor="border-purple-500/70"
                                        dotColor="border-purple-500"
                                    />
                                    <Skill
                                        lang="MongoDB"
                                        blurColor="bg-purple-500"
                                        lineColor="border-purple-500/70"
                                        dotColor="border-purple-500"
                                    />
                                    <Skill
                                        lang="Mongoose"
                                        blurColor="bg-purple-500"
                                        lineColor="border-purple-500/70"
                                        dotColor="border-purple-500"
                                    />
                                    <Skill
                                        lang="GraphQL"
                                        blurColor="bg-purple-500"
                                        lineColor="border-purple-500/70"
                                        dotColor="border-purple-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.forwardRef(About);
