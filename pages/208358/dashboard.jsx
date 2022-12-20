import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Bio from '../../sections/dashboard/Bio';
import Descriptions from '../../sections/dashboard/Descriptions';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Hridoy</title>
            </Head>
            <main>
                <div className="flex flex-col gap-8 min-h-screen p-8">
                    <div className="grid grid-cols-12 gap-10">
                        <Bio />
                        <Descriptions />
                    </div>
                    {/* education */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-2xl font-semibold">Portfolios</h1>
                            <Link
                                href="/208358/portfolio/add"
                                className="flex items-center justify-center py-1 px-3 text-gray-600 bg-gray-700/20 hover:bg-gray-700/30"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                                <span>Add Portfolio</span>
                            </Link>
                        </div>
                        <table className="table-fixed">
                            <thead>
                                <tr>
                                    <th className="w-32">#</th>
                                    <th className="max-w-[384px]">Title</th>
                                    <th>Images</th>
                                    <th>Live Preview</th>
                                    <th>Github</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Portfolio</td>
                                    <td className="opacity-80">
                                        <div className="flex gap-1">
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src="/projects/screencapture-file-D-Github-allegheny-county-profile-with-bios-html-2022-12-02-16_13_07.png"
                                                    alt=""
                                                    fill
                                                    sizes="100px"
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="relative w-24 h-24">
                                                <Image
                                                    src="/projects/screencapture-file-D-Github-allegheny-county-profile-with-bios-html-2022-12-02-16_13_07.png"
                                                    alt=""
                                                    fill
                                                    sizes="100px"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </td>

                                    <td>https://hridoy.netlify.app/</td>
                                    <td>https://hridoy.netlify.app/</td>
                                    <td className="text-sm">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
                                            voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum. Quisquam,
                                            quod voluptatum. Quisquam, quod voluptatum. Quisquam, quod voluptatum.
                                        </p>
                                    </td>

                                    <td>
                                        <div className="flex gap-2">
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
                                                        fillRule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                    />
                                                </svg>
                                            </Link>
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
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
