

export const Skill = ({ lang, blurColor = "bg-green-500", lineColor = "border-green-500/70", dotColor = "border-green-500" }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center relative'>
                <div className={`w-6 h-10 blur-[50px] absolute ${blurColor}`} />
                {/* <div className='w-3 h-3 flex items-center justify-center rounded-full absolute -left-[4px] top-1/2 -translate-y-1/2 bg-black border-2 border-green-500' /> */}
                <div>
                    <div className={`w-8 h-5 rounded-l-xl border-b-[1px] ${lineColor}`} />
                    <div className={`w-8 h-5 -mt-[1px] rounded-l-xl border-t-[1px] ${lineColor}`} />
                </div>
                <div className={`w-1 h-1 border rounded-full ${dotColor}`} />
                <h6 className='text-base font-medium ml-3 whitespace-nowrap'>{lang}</h6>
            </div>
        </div>
    )
}