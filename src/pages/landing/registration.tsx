// import React from 'react'


const registrationData = [
    {
        title: "Learn from our Experts",
        img: "/Vector.png",
        colors: "#031F7B",
        about: "Learn from the Best, Immerse Yourself in Fun and Impactful Learning with Our Expert Instructors. We Handpick Seasoned Professionals to Deliver an Exceptional Learning Experience.",
    },
    {
        title: "Hands on Experience",
        img: "/Vector (1).png",
        colors: "#242424",
        about: "Experience the Power of Doing: Embrace a Hands-on Learning Approach. At Our Academy, We Value Practicality and Empower You to Learn by Doing. Get Ready to Dive In and Unlock Your Full Potential!",
    },
    {
        title: "Open Door to Opportunities",
        img: "/Vector (2).png",
        colors: "#031F7B",
        about: "Open the Door to Opportunities: Secure a Paid Internship Placement Upon Successful Completion of Our Intensive Six-Month Training Program. Your Hard Work and Dedication Will Be Rewarded with a Valuable Real-World Experience and a Stepping Stone towards Your Future Success.",
    },

]



const Registration = () => {

    return (
        <>
            <style>
                {`
@keyframes slide {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-slide {
  display: inline-block;
  white-space: nowrap;
  animation: slide 20s linear infinite;
}
`}
            </style>

            <div className="w-full overflow-hidden bg-[#D6E0FF] flex items-center p-2 text-[8px] md:text-[19px]">
                <p className="animate-slide">
                    Registration for Nexxforge Academy cohort 1.0 will soon start! Join the wait list for Cohort 1 🚀
                </p>
            </div>

            <div
                className="w-full bg-[#F3F3FC] flex items-center gap-5 flex-col pt-8 pb-8">
                <h3 className="text-[22px] font-bold">What's in for you?</h3>
                <main className="w-[83%] bg-[#F3F3FC] flex flex-wrap items-center justify-between gap-3">
                    {
                        registrationData.map((i, index) => (
                            <article key={index} className="w-full h-auto md:w-[29%] md:h-100 bg-[#FFFFFF] items-baseline shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[9px] p-5 pt-7 flex flex-col gap-3 hover:border-t-2 hover:border-t-[#031F7B]">
                                <div className="w-13 h-13 flex items-center justify-center p-3 rounded-[50%] bg-[#C5E4FF]" >
                                    <img src={i.img} className="w-[80%]" />
                                </div>
                                <h3 className="text[10px] md:text-[17px] font-semibold pt-3">{i.title}</h3>
                                <p
                                    style={{ backgroundColor: `${i.colors}` }}
                                    className="w-[30%] h-2"></p>
                                <p className="text[10px] md:text-[15px] font-light">{i.about}</p>
                            </article>
                        ))
                    }
                </main>
            </div>
        </>
    )
}

export default Registration
