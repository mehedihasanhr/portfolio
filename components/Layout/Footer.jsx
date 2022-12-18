

export const Footer = () => {
    return (
        <footer className=" border-t border-gray-600 border-dashed text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center justify-center sm:items-start">
                            <span className="text-sm">© 2022</span>
                            <span className="text-sm">All rights reserved</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm">Made with </span>
                        <span className="relative px-2">
                            <span className="w-10 h-10 bg-red-500 blur-[100px] absolute block" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="text-red-500"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                            </svg>
                        </span>
                        <span className="text-sm">by</span>
                        <a href="#" className="text-sm font-bold mx-2 hover:text-gray-300">
                            @hridoy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}