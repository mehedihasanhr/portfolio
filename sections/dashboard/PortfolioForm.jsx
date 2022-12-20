import { useEffect, useState } from 'react';
import { Input, Textarea } from '../../components/Form';
import { Button } from '../../components/Button';

const PortfolioForm = ({ setPortfolio }) => {
    const [title, setTitle] = useState('');
    const [github, setGithub] = useState('');
    const [livePreview, setLivePreview] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, github, livePreview, description, images);
        setPortfolio({ title, github, livePreview, description, images });
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-fit h-fit p-10 border border-dashed border-gray-600">
                <div>
                    <form className="flex flex-col gap-4">
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-6">
                                <Input
                                    label="Title"
                                    placeholder="Portfolio"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Input
                                    label="Github"
                                    placeholder="Github"
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                />
                                <Input
                                    label="Live Preview"
                                    placeholder="Live Preview"
                                    value={livePreview}
                                    onChange={(e) => setLivePreview(e.target.value)}
                                />
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        type="file"
                                        multiple // multiple files
                                        onChange={(e) => setImages(e.target.files)}
                                        className="block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-violet-50 file:text-violet-700
                                                hover:file:bg-violet-100
                                                "
                                    />
                                </label>
                            </div>
                            <div className="col-span-6">
                                <Textarea
                                    label="Description"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <div className="flex justify-start">
                                    <Button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="w-full bg-orange-500/30"
                                        buttonClassName="w-full"
                                    >
                                        Add Portfolio
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PortfolioForm;
