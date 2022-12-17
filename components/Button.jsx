import Link from "next/link"



export const Button = ({ children, className = "bg-orange-500/10 group-hover:bg-orange-500/80", href = "", bgEffect = "bg-orange-500" }) => {
    return (
        <div className={`relative group text-white  px-5 py-2 rounded-md w-fit transition-colors ease-linear duration-300 ${className}`}>
            <span className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 blur-[100px] block group-hover:w-20 group-hover:h-20 ${bgEffect}`} />
            <button className="outline-none border-none bg-transparent w-full h-full">
                {children}
            </button>
        </div>
    )
}