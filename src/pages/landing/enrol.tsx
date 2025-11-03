// import React from 'react'


    const Homepics = [
        "/Frame 1984078376 (1).png",
        "/Frame 1984078377.png",
        "/Frame 1984078379.png",
        "/Frame 1984078378.png"
    ]

const Enrol = () => {


    return (
        <div
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className='w-[80%] md:w-[65%] flex items-center flex-col justify-center gap-20 pb-5'>
            <div className=" md:w-full flex items-center flex-col justify-center gap-2">
                <h1 className="w-full text-[20px] md:text-[37px] md:w-[70%] text-center font-extrabold bg-linear-to-r bg-clip-text text-transparent from-[#051E6D] to-[#052EB1]">
                    Empowering <span className="text-[#181717]">You to Build,</span> Innovate, <span className="text-[#181717]">and Lead</span> <span className="text-[#052EB2]">in Tech</span>
                </h1>
                <p className="md:w-[70%] font-light md:font-normal text-center">Join a growing community of innovators learning, building, and leading through practical tech education.</p>
                {/* <div className="pb-10"> */}
                    <a 
                href="https://forms.gle/dXxhCgjkcy91MBwQ9"
                className="w-35 cursor-pointer hover:bg-[#181717] hover:text-[#FFFFFF] flex items-center justify-center bg-[#031F7B] px-2 py-3 text-[#FFFFFF] text-[14px] font-normal outline-none rounded-sm">
                    Enrol now
                </a>
            </div>
            <div className="items-center flex justify-between h-30 md:h-58 gap-2 md:gap-5 object-contain">
                {
                    Homepics.map((pics, index) => (
                        <img
                            key={index}
                            src={pics}
                            className={`"w-[18%] md:w-[24%] h-full object-cover rounded-[10px] overflow-hidden duration-500 ${index === 1 ||index === 2 ? "mb-25" : "mb-0"}`}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Enrol
