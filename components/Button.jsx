import Link from 'next/link';

export const Button = ({
    children,
    className = 'bg-orange-500/10 group-hover:bg-orange-500/80',
    bgEffect = 'bg-orange-500',
    onClick,
    ariaDescribedBy,
    props,
    type = 'button',
    buttonClassName = '',
}) => {
    return (
        <div
            className={`relative group text-white rounded-md w-fit transition-colors ease-linear duration-300 ${className}`}
        >
            <span
                className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 blur-[100px] block group-hover:w-20 group-hover:h-20 pointer-events-none ${bgEffect}`}
            />
            <button
                aria-describedby={ariaDescribedBy}
                className={`outline-none border-none bg-transparent w-full h-full rounded-md px-5 py-2 ${buttonClassName}`}
                onClick={(e) => (onClick ? onClick(e) : null)}
                type={type}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};
