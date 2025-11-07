// import React from 'react'


const teamsData = [
    {
        firstName: "Joshua",
        lastName: "Saleh",
        role: "CEO /Founder",
        img: "/Ellipse 15.png",
    },
    {
        firstName: "Sophia",
        lastName: "James",
        role: "CO-Founder/ COO",
        img: "/Ellipse 15 (1).png",
    },
    {
        firstName: "Godwill",
        lastName: "Nwachukwu",
        role: "Chief marketing Officer",
        img: "/Ellipse 15 (2).png",
    },
    {
        firstName: "Maryjane",
        lastName: "Uzochukwu",
        role: "Chief Technical Operator",
        img: "/Ellipse 15 (3).png",
    },
    {
        firstName: "Prince",
        lastName: "Jehosaphat",
        role: "S.R Product Designer",
        img: "/Ellipse 15 (4).png",
    },
    {
        firstName: "Ismail",
        lastName: "Olawale",
        role: "Frontend Developer",
        img: "/Ellipse 15 (6).png",
    },
    {
        firstName: "Osuji",
        lastName: "wisdom",
        role: "Frontend Developer",
        img: "/Ellipse 15 (5).png",
    },
    {
        firstName: "Ahmed",
        lastName: "Aremu",
        role: "Frontend Developer",
        img: "/Ellipse 15 (7).png",
    },
    {
        firstName: "Emmanuel",
        lastName: "John",
        role: "Backend Engineer",
        img: "/Ellipse 15 (9).png",
    },
    {
        firstName: "Adebusola",
        lastName: "Ajibola",
        role: "Graphic Designer",
        img: "/Ellipse 15 (10).png",
    },
    {
        firstName: "Samuel ",
        lastName: "wilson",
        role: "Graphic Designer",
        img: "/Ellipse 15 (11).png",
    },
    {
        firstName: "Tobi",
        lastName: "Akinwade",
        role: "Video Editor",
        img: "/Ellipse 15 (12).png",
    },
]

const Teams = () => {
    return (
          <div 
           style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="w-full flex items-center gap-5 flex-col pt-8 pb-8">
      <h3 className="text-[22px] font-bold">Meet The Team</h3>
      <main className="w-[80%] flex flex-wrap items-center justify-between gap-2 ">
        {
            teamsData.map((i, index) => ( 
                <article key={index} className="w-[47%] md:w-[24%] gap-2 pt-5 flex flex-col md:pt-15 md:gap-2 items-center">
                    <div className="w-full md:h-60 object-cover rounded-[50%]">
                        <img src={i.img} className="w-full h-full object-contain"/>
                    </div>
                    <h3 className="text-[17px] hidden md:flex font-semibold text-center">{i.firstName} {i.lastName}</h3>
                    <h3 className="text-[17px] md:hidden font-semibold text-center">{i.firstName}</h3>
                    <p className="text-[15px] font-light text-center">{i.role}</p>
                </article>
            ))
        }
      </main>
    </div>
    )
}

export default Teams
