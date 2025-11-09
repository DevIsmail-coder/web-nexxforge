// import React from 'react'


const testimonialData = [
    {
        img: "/Ellipse 12.png",
        name: "Joseph Sodje",
        role: "Product Design Trainee",
        testimony: "Joining NexxForge was one of the best decisions I’ve made. With their hands-on training and real-world projects, I went from complete beginner to confidently launching my first product.",
    },
    {
        img: "/Ellipse 12 (1).png",
        name: "Joan Samuel",
        role: "Product Design Trainee",
        testimony: "What sets NexxForge apart is the real emphasis on solving real problems. It’s not just about learning code—it’s about building applications that matter. The experience transformed my mindset and my skillset.”",
    },
    {
        img: "/Ellipse 11.png",
        name: "Nanpon  Ndam",
        role: "Product Design Trainee",
        testimony: "NexxForge isn’t just a training platform; it’s a family that pushes you to be better. The guidance I received went beyond tech — it built my confidence and leadership skills",
    },
    {
        img: "/Ellipse 11 (3).png",
        name: "Sarah Daniel",
        role: "Product Design Trainee",
        testimony: "Joining Nexxforge was one of the best decisions I’ve made. The mentorship, hands-on projects, and community helped me grow from a beginner to a confident product designer ready to take on real-world challenges.",
    },
]

const Testimonial = () => {
    return (
        <div className="w-[90%] md:w-[80%] flex flex-col items-center">
            <h3 className="w-full text-[22px] text-center md:text-[40px] font-[650]">Testimonials</h3>
            <p className="md:w-[65%] w-full text-[14px] md:text-[23px] font-light text-center">Our community speaks — see how NexxForge is changing lives, one skill at a time.</p>
       
        <div className="w-full flex flex-col md:flex-row items-center gap-7 md:gap-5 md:overflow-x-auto md:scroll-smooth md:scrollbar-hide px-4 pt-7 pb-7">
            {
                testimonialData.map((i, index) => (
                    <div key={index}
                    style={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}
                    className="w-full md:w-[55%] md:h-95 flex flex-col justify-center gap-3 rounded-[9px] px-5 py-3 md:shrink-0"> 
                    <article className="flex gap-3">
                        <img src={i.img}  alt=""  className="w-15 h-15 md:w-22 md:h-22" />
                        <span>
                            <h2 className="text-[15px] md:text-[20px] font-bold text-[#270B4D]">{i.name}</h2>
                            <p className="text-[10px] md:text-[15px] font-normal md:font-[450]">{i.role}</p>
                        </span>
                    </article>
                    <p className=" md:text-[25px] text-[16px] font-light">{i.testimony}</p>
                    </div>
                ))
            }
        </div>
         </div>
    )
}

export default Testimonial
