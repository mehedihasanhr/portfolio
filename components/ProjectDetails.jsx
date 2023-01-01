import Image from 'next/image';
import { Button } from './Button';
import Sliders from './Sliders';

const ProjectDetails = ({ close, open, project }) => {
    console.log(project);
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
                {project && project.images.length > 0 && (
                    <Sliders className="h-[350px] w-full overflow-hidden" sliders={project.images} />
                )}
            </div>

            {/*  details */}

            <div className="py-5">
                <h1 className="text-2xl font-bold">{project && project.name}</h1>
                <p className="text-sm text-gray-400 mt-2">{project && project.description && project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.lang &&
                        project.lang.map((lang, index) => (
                            <div key={index} className="relative text-xs flex items-center justify-center">
                                <div className="absolute w-10 h-10 bg-green-500 blur-[40px] md:blur-[100px] block z-0" />
                                <span className="rounded-full py-0 px-3 bg-green-500/30">{lang}</span>
                            </div>
                        ))}
                </div>

                {/*  Preview */}
                <div className="mt-5 flex items-center space-x-3">
                    <Button className="bg-orange-500/30 hover:bg-orange-500/80">
                        <a href={project.live} target="_blank" rel="noreferrer">
                            Live Preview
                        </a>
                    </Button>

                    {project.dlink && (
                        <Button className="bg-yellow-500/30 hover:bg-yellow-500/80">
                            <a href={project.dlink} target="_blank" rel="noreferrer">
                                Dashboard Live Preview
                            </a>
                        </Button>
                    )}
                    <Button className="bg-green-500/30 hover:bg-green-500/80">
                        <a href={project.github} target="_blank" rel="noreferrer">
                            Code on GitHub
                        </a>
                    </Button>

                    {project.github2 && (
                        <Button className="bg-green-500/30 hover:bg-green-500/80">
                            <a href={project.github2} target="_blank" rel="noreferrer">
                                Code on GitHub 2
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
