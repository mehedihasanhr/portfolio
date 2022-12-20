import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '../components/Button';
import { Project } from '../components/Project';
import ProjectDetails from '../components/ProjectDetails';

const Projects = () => {
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = React.useState(false);
    const [projectDetails, setProjectDetails] = React.useState(null);
    return (
        <section id="portfolios">
            <div className="container sm:py-20 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center mb-20">
                        <div className="block w-fit relative mb-2.5">
                            <span className="absolute top-0 left-0 w-full h-full bg-green-500 blur-[100px]" />
                            <h3 className="font-bold">
                                My <span className="text-green-500">Portfolios</span>
                            </h3>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-base">
                            --- a few recent design & coding projects ---
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-10 sm:gap-8 md:gap-6 lg:gap-10 mb-20">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <Project
                            key={index}
                            imageSrc="/projects/Screenshot from 2022-12-17 23-10-37.png"
                            title="Tarulota"
                            showDetailsModal={() => setIsProjectDetailsOpen(true)}
                            setDetails={setProjectDetails}
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium at, aliquid, natus cum ducimus asperiores molestiae modi animi ipsum atque ullam expedita, nulla blanditiis doloribus iusto rerum cumque ut deleniti."
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center w-full">
                    <Button className="bg-green-500/10 hover:bg-green-500/70" bgEffect="bg-green-500">
                        <Link href="/" className="whitespace-nowrap">
                            View More...
                        </Link>
                    </Button>
                </div>
            </div>

            <ProjectDetails open={isProjectDetailsOpen} close={() => setIsProjectDetailsOpen(false)} />
        </section>
    );
};

export default React.forwardRef(Projects);
