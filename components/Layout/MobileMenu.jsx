


export const MobileMenu = () => {
    return (
        // <div className="fixed top-0 left-0 w-full h-full min-w-screen  min-h-screen bg-[rgba(0,255,0,0.02)] backdrop-blur-lg z-[100]">

        // </div>
        <div className="fixed top-0 left-0 w-full h-full min-w-screen  min-h-screen z-[100]"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(03, 03, 03, 0.9), rgba(03,03,03,0.9)), url('/bg-image.png')`,
                scrollBehavior: 'smooth',
            }}>

        </div>
    )
}