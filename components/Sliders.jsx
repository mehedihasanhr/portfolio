import Image from 'next/image';
import * as React from 'react';

const Sliders = ({ sliders, setSliders, className = 'min-w-full min-h-full' }) => {
    const [activeSlider, setActiveSlider] = React.useState(0);

    return (
        <div className="flex flex-col space-y-3 py-3">
            <div className={`relative min-w-full min-h-full ${className}`}>
                <Image
                    src={sliders[activeSlider]}
                    alt={'Slider Image'}
                    fill
                    sizes="
                        (max-width: 640px) 340px,
                        (max-width: 768px) 400px,
                        (max-width: 1024px) 500px,
                    "
                    className="object-contain"
                />
            </div>

            <div className="flex items-center justify-center relative py-3 space-x-2">
                {sliders.map((slider, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlider(index)}
                        className={`w-3 h-3 border border-white rounded-full ${
                            index === activeSlider ? 'bg-white' : 'bg-white/30'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sliders;
