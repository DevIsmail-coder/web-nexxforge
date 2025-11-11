const schoolData = [
    "/Frame 1984078404 (1).png",
    "/Frame 1984078405 (1).png",
    "/Frame 1984078403 (2).png",

]


const School = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center pt-10 pb-10 gap-5">
            <h3 className="text-[23px] font-[650]">Our Schools</h3>
             <p className="md:w-[35%] w-[90%] text-[10px] md:text-[16px] md:font-normal text-center">We ensure that Africans interested in exploring various occupations can readily access the resources they need to learn and grow</p>
            <main className="w-[80%] flex flex-wrap items-center justify-between gap-5 md:gap-0">
                {
                    schoolData.map((pics, index) => (
                        <article key={index} className="w-full md:w-[31%] h-65 rounded-[20px] object-contain">
                        <img src={pics} alt="" className="w-full h-full object-cover rounded-[9px]"/>
                        </article>
                    ))
                }
            </main>
        </div>
    )
}

export default School