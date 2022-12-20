const Descriptions = () => {
    return (
        <div className="col-span-6 h-full">
            <div className="relative h-full">
                {/* <div className="absolute left-10 bg-green-500 blur-[200px] w-64 h-64" /> */}
                <div className="w-full h-full border border-dashed border-gray-800 p-5 rounded-xl">
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <span className="text-gray-500">Skills</span>
                            <div className="flex flex-wrap space-x-2">
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">HTML</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">CSS</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">JavaScript</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">React</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Next.js</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Tailwind CSS</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Bootstrap</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Material UI</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Node.js</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Express.js</span>
                            </div>
                        </div>

                        <div>
                            <span className="text-gray-500">Hero Section</span>
                            <div className="flex flex-wrap space-x-2">
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Frontend Developer</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">React.js Developer</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">Next.js Developer</span>
                                <span className="text-gray-500 bg-gray-700/10 p-2 rounded-xl">MERN Developer</span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <span className="text-gray-500">Description</span>
                            <span className="text-gray-500">
                                I am a self-taught web developer. I have been working on web development for 2 years. I
                                have worked on many projects. I have worked on many projects. I have worked on many
                                projects. I have worked on many projects. I have worked on many projects. I have worked
                                on many projects. I have worked on many projects.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Descriptions;
