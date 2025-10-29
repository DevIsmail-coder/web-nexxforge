// import React from 'react'


const chooseData = [
    {
        title: "Quality and Diverse Pool of Engineers",
        about: "Gain access to a talented and diverse community of engineers, providing a rich learning environment and valuable networking opportunities.",
    },
        {
        title: "Personalized Support",
        about: "Receive dedicated support throughout your journey, ensuring a tailored and fulfilling learning experience.",
    },
        {
        title: "Real-Life Project Experience",
        about: "Engage in hands-on projects that simulate real-world scenarios, applying your skills and building practical expertise.",
    },
        {
        title: "Holistic Training Approach",
        about: "Develop not only technical skills but also soft skills and interview preparation tips to enhance your employability.",
    },
        {
        title: "Portfolio Development",
        about: "Benefit from our guidance in building a compelling portfolio to showcase your abilities, opening doors to internships and junior software engineering roles. ",
    },
        {
        title: "Choose Nexxforge",
        about: "for a comprehensive and impactful learning experience, empowering you for success in web development industry.",
    },
]
const Choose = () => {
  return (
    <div className="w-full bg-[#F3F3FC] flex items-center gap-5 flex-col pt-8 pb-8">
      <h3 className="text-[22px] font-bold">Why choose Nexxforge</h3>
      <main className="w-[80%] flex flex-wrap items-center justify-between gap-2 ">
        {
            chooseData.map((i, index) => ( 
                <article key={index} className="w-full h-auto md:w-[49%] md:h-65 bg-[#FFFFFF] justify-center shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] rounded-[9px] p-5 flex flex-col gap-3 hover:border-t hover:border-t-[#031F7B]">
                    <img src="/Alt images 1.png" className="w-10 md:w-12"/>
                    <h3 className="text[10px] md:text-[19px] font-[550]">{i.title}</h3>
                    <p className="text[10px] md:text-[21px] font-extralight">{i.about}</p>
                </article>
            ))
        }
      </main>
    </div>
  )
}

export default Choose



