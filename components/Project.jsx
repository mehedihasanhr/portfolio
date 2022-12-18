import Image from "next/image"


export const Project = ({ imageSrc, title, description, href = "/" }) => {
    return (
        <div className='relative col-span-4 md:col-span-6 lg:col-span-4 opacity-90'>
            <div className='relative'>
                <a target="_blank" rel="noopenner noreferrer" href={href} className='group block relative w-full h-full shadow-xl bg-black/70 pb-3'>
                    <div className='absolute w-32 h-32 bg-green-500 blur-[150px]' />
                    <div className="p-3 sm:p-0">
                        <div className='relative min-w-full min-h-[300px]'>
                            {imageSrc ? <Image src={imageSrc} alt={title} fill sizes="300px" /> : null}
                        </div>
                    </div>
                    <div className='opacity-1 md:opacity-0 group-hover:opacity-100 md:absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center'>
                        <div className="px-5 py-3">
                            <h3> {title} </h3>
                            <p className="text-xs text-gray-400 md:text-gray-300 mt-3 mb-1 line-clamp-3">
                                {description}
                            </p>
                            <button className="text-xs text-gray-400 md:text-gray-400 mb-3.5 block">Read More</button>

                            <div className="flex flex-wrap gap-2">
                                <div className="relative text-xs flex items-center justify-center">
                                    <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                                    <span className="rounded-full py-0 px-3 bg-green-500/30">ReactJS</span>
                                </div>
                                <div className="relative text-xs flex items-center justify-center">
                                    <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                                    <span className="rounded-full py-0 px-3 bg-green-500/30">Tailwind CSS</span>
                                </div>

                                <div className="relative text-xs flex items-center justify-center">
                                    <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                                    <span className="rounded-full py-0 px-3 bg-green-500/30">Bootstrap 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}