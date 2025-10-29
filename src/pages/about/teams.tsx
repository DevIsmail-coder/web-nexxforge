// import React from 'react'


const teamsData = [
    {
        name: "Joshua Saleh",
        role: "CEO /Founder",
        img: "/Ellipse 15.png",
    },
    {
        name: "Sophia James",
        role: "CO-Founder/ COO",
        img: "/Ellipse 15 (1).png",
    },
    {
        name: "Godwill Nwachukwu",
        role: "Chief marketing Officer",
        img: "/Ellipse 15 (2).png",
    },
    {
        name: "Maryjane Nwachikwu",
        role: "Chief Technical Operator",
        img: "/Ellipse 15 (3).png",
    },
    {
        name: "Prince Jehosaphat",
        role: "S.R Product Designer",
        img: "/Ellipse 15 (4).png",
    },
    {
        name: "Ismail Olawale",
        role: "Frontend Developer",
        img: "/Ellipse 15 (6).png",
    },
    {
        name: "Osuji wisdom",
        role: "Frontend Developer",
        img: "/Ellipse 15 (5).png",
    },
    {
        name: "Ahmed Aremu",
        role: "Frontend Developer",
        img: "/Ellipse 15 (7).png",
    },
    {
        name: "Emmanuel John",
        role: "Backend Engineer",
        img: "/Ellipse 15 (9).png",
    },
    {
        name: "Adebusola Ajibola",
        role: "Graphic Designer",
        img: "/Ellipse 15 (10).png",
    },
    {
        name: "Samuel wilson",
        role: "Graphic Designer",
        img: "/Ellipse 15 (11).png",
    },
    {
        name: "Tobi Samuel",
        role: "Video Editor",
        img: "/Ellipse 15 (12).png",
    },
]

const Teams = () => {
    return (
          <div className="w-full flex items-center gap-5 flex-col pt-8 pb-8">
      <h3 className="text-[22px] font-bold">Meet The Team</h3>
      <main className="w-[80%] flex flex-wrap items-center justify-between gap-2 ">
        {
            teamsData.map((i, index) => ( 
                <article key={index} className="w-[47%] md:w-[24%]  flex flex-col md:pt-15 md:gap-2 items-center">
                    <div className="w-full h-60 object-cover rounded-[50%]">
                        <img src={i.img} className="w-full h-full object-contain"/>
                    </div>
                    <h3 className="text-[17px] font-[450] text-center">{i.name}</h3>
                    <p className="text-[15px] font-extralight text-center">{i.role}</p>
                </article>
            ))
        }
      </main>
    </div>
    )
}

export default Teams
