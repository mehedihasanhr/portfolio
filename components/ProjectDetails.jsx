import Image from 'next/image';
import { Button } from './Button';
import Sliders from './Sliders';

const ProjectDetails = ({ close, open }) => {
    if (!open) return null;
    return (
        <div className="rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full max-w-[1080px] max-h-[800px] bg-[rgba(0,0,0,0.8)] backdrop-blur-xl p-10">
            {/* close button */}
            <div className="absolute top-3 right-3 z-10">
                <Button
                    ariaDescribedBy="closeProductDetailsModal"
                    onClick={close}
                    className="rounded-full bg-orange-500/30 hover:bg-orange-500"
                    buttonClassName="px-2 py-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
            </div>

            {/*  thumbnails */}

            <div className="h-fit w-full">
                <Sliders
                    className="h-[350px] w-full overflow-hidden"
                    sliders={[
                        {
                            imageSrc:
                                '/projects/screencapture-file-D-Github-allegheny-county-dept-landing-page-a-html-2022-12-02-16_12_37.png',
                            alt: 'Allegheny County Department Landing Page',
                            width: 1920,
                            height: 1080,
                        },
                        {
                            imageSrc:
                                '/projects/screencapture-file-D-Github-allegheny-county-profile-with-bios-html-2022-12-02-16_13_07.png',
                            alt: 'Allegheny County Department Landing Page',
                            width: 1920,
                            height: 1080,
                        },
                    ]}
                />
            </div>

            {/*  details */}

            <div className="py-5">
                <h1 className="text-2xl font-bold">Allegheny County Department Landing Page</h1>
                <p className="text-sm text-gray-400 mt-2">
                    A landing page for Allegheny County Department of Human Services. This page was created to help
                    individuals find the right department for their needs. The page was created using HTML, CSS, and
                    JavaScript. The page is fully responsive and works on all devices. The page is also fully accessible
                    and meets all WCAG 2.1 AA standards. The page is also fully optimized for search engines.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">HTML</span>
                    </div>

                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">CSS</span>
                    </div>

                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">JavaScript</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">Accessibility</span>
                    </div>

                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">SEO</span>
                    </div>

                    <div className="relative text-xs flex items-center justify-center">
                        <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                        <span className="rounded-full py-0 px-3 bg-green-500/30">Responsive</span>
                    </div>
                </div>

                {/*  Preview */}
                <div className="mt-5 flex items-center space-x-3">
                    <Button className="bg-orange-500/30 hover:bg-orange-500/80">
                        <a
                            href="https://allegheny-county-dept-landing-page-a.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Preview
                        </a>
                    </Button>
                    <Button className="bg-green-500/30 hover:bg-green-500/80">
                        <a
                            href="https://allegheny-county-dept-landing-page-a.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Code on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;