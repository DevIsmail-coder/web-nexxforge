// import React from 'react'


const journeyData = [
    "/Frame 1984078404 (2).png",
    "/Frame 1984078405 (2).png",
    "/Frame 1984078377.png",
    "/Frame 1984078376 (1).png",
    "/Frame 1984078405 (4).png",
    "/Frame 1984078403 (4).png",
    "/Frame 1984078404 (3).png",
    "/Frame 1984078405 (6).png",
    "/Frame 1984078403.png"

]


const Journey = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center pt-10 pb-10 gap-5">
            <h3 className="w-[80%] md:w-[40%] text-[22px] text-center md:text-[40px] font-[650]">Moments That Define Our Journey</h3>
            <p className="md:w-[50%] w-[80%] text-[14px] md:text-[23px] font-light text-center">Every picture tells a story of growth, collaboration, and the passion that drives NexxForge</p>
            <div className="w-full flex items-center justify-center pt-15 pb-15 bg-[#F3F3FC]">
                <main className="w-[80%] flex flex-wrap items-center justify-between gap-3">
                    {
                        journeyData.map((i, index) => (
                            <article key={index} className="w-full md:w-[31%] h-70 rounded-[20px] object-contain pt-5">
                                <img src={i} alt="" className="w-full h-full object-cover rounded-[9px]" />
                            </article>
                        ))
                    }
                </main>
            </div>

        </div>
    )
}

export default Journey
