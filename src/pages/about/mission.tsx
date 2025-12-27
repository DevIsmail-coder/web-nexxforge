// import React from 'react'
// import type { About } from "../../types/about"



const Aboutpics = [
  "/Frame 1984078403 (1).png",
  "/Frame 1984078414.png",
  "/Frame 1984078405 (6).png",
]

const Mission = () => {
  return (
    <div 
     style={{ fontFamily: "'Montserrat', sans-serif" }}
    className='w-[80%] flex items-center flex-col justify-center gap-8'>
      <div className="flex items-center flex-col justify-center gap-2">
        <h1 className="text-[33px] font-extrabold bg-linear-to-r bg-clip-text text-transparent from-[#051E6D] to-[#052EB1]">About Us</h1>
        <p className="md:w-[90%] font-normal text-center">Empowering the Future, Building, Nurturing, and Deploying World-Class tech talents</p>

       
      </div>
      <div className="w-full items-center flex justify-between md:h-68 object-contain">
        {
          Aboutpics.map((pics, index) => (
            <img
              key={index}
              src={pics}
              loading='eager'
              className="w-[32%] h-full object-contain rounded-[10px]"
            />
          ))}
      </div>
      <div className="w-full text-center md:text-left flex flex-col md:flex-row justify-between">
        <article className="w-full flex flex-col gap-2  md:w-[48%]" >
          <h3 className="text-[20px] font-bold">Our Mission to Mentor and Train Young Minds in web development</h3>
          <p className="text-[15px] md:text-[23px] font-extralight font-montserrat">
            Our mission is bold and clear: to train 7,000 aspiring tech talents across Africa over the next 5 years — empowering them with in-demand digital skills in areas like Product Design, Web Development, and Software Engineering. Through this mission, we aim to raise confident, job-ready professionals who are prepared to thrive in today’s digital economy.
          </p>
          <p className="text-[15px] md:text-[23px] font-extralight font-montserrat">
             At NexxForge, our approach is centered around real-world experience, expert guidance, and a supportive learning environment. We don’t just teach theory — we build doers. From day one, students are immersed in a learning journey that challenges them to solve problems, collaborate effectively, and design impactful solutions
          </p>
          <p className="text-[15px] md:text-[23px] font-extralight font-montserrat">
            Join us as we shape the future of African tech — one student, one skill, and one solution at a time.
          </p>
        </article>
        <article className="hidden md:flex md:h-145 object-cover">
          <img src="/Frame 1984078404.png loading='eager'"  className="w-full h-full object-contain"/>
        </article>
      </div>
    </div>
  )
}

export default Mission



