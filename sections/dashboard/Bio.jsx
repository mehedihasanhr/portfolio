import Image from 'next/image';
import Link from 'next/link';

const Bio = () => {
    return (
        <div className="col-span-6">
            <div className="relative ">
                {/* <div className="absolute left-10 bg-green-500 blur-[200px] w-64 h-64" /> */}
                <div className="w-full border border-dashed border-gray-800 p-5 rounded-xl relative">
                    <div className="flex space-x-10 ">
                        <div className="p-5 bg-gray-700/10 w-fit">
                            <div className="relative w-72 h-80 opacity-70">
                                <Image src="/edited.png" alt="" fill sizes="" />
                            </div>
                        </div>

                        {/* identifications */}
                        <div className="flex flex-col">
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">Name</span>
                                    <span className="text-gray-500">Md Mehedi Hasan Hridoy</span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">Date of birth</span>
                                    <span className="text-gray-500">12 Decemter, 1999</span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">Mobile</span>
                                    <span className="text-gray-500">(+880) 151-830-9205</span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">Email</span>
                                    <span className="text-gray-500">mehedihasan.hr.324@gmail.com</span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">Linked In </span>
                                    <span className="text-gray-500">www.linkedin.com/in/mehedihasan-hr</span>
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <span className="text-gray-600">GitHub</span>
                                    <span className="text-gray-500">https://github.com/mehedihasanhr</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 absolute right-3 top-3">
                        {/* edit button */}
                        <Link
                            href="/"
                            className="flex items-center justify-center w-8 h-8 text-gray-600 bg-gray-700/20 hover:bg-gray-700/30"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                />
                            </svg>
                        </Link>

                        {/* full screen */}
                        <Link
                            href="/"
                            className="flex items-center justify-center w-8 h-8 text-gray-600 bg-gray-700/20 hover:bg-gray-700/30"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
