import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

export const Project = ({ id, imageSrc, title, description, href = '/', showDetailsModal, setDetails }) => {
    const handleDetailsClick = (e) => {
        e.preventDefault();
        showDetailsModal();
        setDetails();
    };
    return (
        <div className="relative col-span-4 md:col-span-6 lg:col-span-4 opacity-90">
            <div className="relative">
                <div className="group block relative w-full h-full shadow-xl bg-black/70 ">
                    <div className="absolute w-32 h-32 bg-green-500 blur-[150px]" />
                    <div className="p-3 sm:p-0">
                        <div className="relative min-w-full min-h-[300px]">
                            {imageSrc ? (
                                <Image src={imageSrc} alt={title} fill sizes="300px" className="object-cover" />
                            ) : null}
                        </div>
                    </div>
                    <div className="opacity-1 md:opacity-0 group-hover:opacity-100 md:absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
                        <div className="px-5 py-3 flex flex-col items-center justify-between">
                            <h3> {title} </h3>

                            <div className="flex items-center gap-2 mt-4">
                                <Button className="bg-blue-500 hover:bg-blue-500/80" buttonClassName="px-2 py-0.5">
                                    <a
                                        href="https://allegheny-county-dept-landing-page-a.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs sm:text-sm font-medium"
                                        onClick={handleDetailsClick}
                                    >
                                        Details
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
