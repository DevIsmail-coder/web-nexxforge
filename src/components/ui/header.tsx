import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from "lucide-react";



const Header = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {document.removeEventListener("mousedown", handleClickOutside)}
  }, [])


  const handleNavigate = (path: string) => {
    setIsOpen(false)
    navigate(path);
  };

  const isActive = (path: string) =>
    location.pathname === path ? "text-[#062381]" : "";


  return (
    <div
     style={{ fontFamily: "'Montserrat', sans-serif" }}
    className='pt-20 md:pt-40 bg-[#FFFFFF]'>
      <div className="flex w-full items-center justify-center fixed top-0 left-0 right-0 z-50">
        <main className="hidden w-[80%] items-center justify-between md:flex  py-6 bg-[#FFFFFF]/70">
          <article className="w-[15%]">
            <img src="public/WhatsApp_Image_2025-09-10_at_14.38.28-removebg-preview 1.png" />
          </article>
          <article className="w-[32%] flex items-center text-[18px] justify-between text-[#242424] cursor-pointer">
            <h2 onClick={() => handleNavigate("/")} className={isActive("/")}>Home</h2>
            <h2 onClick={() => handleNavigate("/about-us")} className={isActive("/about-us")}>About</h2>
            <h2 onClick={() => handleNavigate("/contact-us")} className={isActive("/contact-us")}>Contact</h2>
          </article>
          <button className="w-[20%] border - 1 border-[#223A8B] hover:border-0 p-4 text-[#031F7B] text-[20px] cursor-pointer hover:bg-[#181717] hover:text-[#FFFFFF] font-light outline-none rounded-sm"
            onClick={() => window.location.href = "https://hubspot-k95r.onrender.com/api/v1/authenticate"}
          >Join the Waitlist</button>
        </main>
        <main className="w-full flex justify-center md:hidden bg-[#FFFFFF] pb-3"
         ref={menuRef}
        >
          <div className='w-[90%]'>
            <div className='w-full flex items-center justify-between pb-5 pt-3'>
              <img src="public/WhatsApp_Image_2025-09-10_at_14.38.28-removebg-preview 1.png" className="w-25" />
              <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-center cursor-pointer p-1.5 bg-[#031F7B]'>
                <Menu className='text-white size-4' />
              </div>
            </div>
            {
              isOpen &&
              <div
                className={` p-2 animate__fadeInDown  bg-white transform transition-transform duration-300 text-[12px] font-light flex flex-col gap-7 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                  }`}
              >
                <p onClick={() => handleNavigate("/")} className={isActive("/")}>Home</p>
                <p onClick={() => handleNavigate("/about-us")} className={isActive("/about-us")}>About</p>
                <p onClick={() => handleNavigate("/contact-us")} className={isActive("/contact-us")}>Contact</p>
                <button className="w-32 cursor-pointer hover:bg-[#181717] hover:text-[#FFFFFF]  bg-[#223A8B] px-2 py-3.5 text-[#FFFFFF] text-[10px] font-light outline-none rounded-sm"
                  onClick={() => window.location.href = "https://hubspot-k95r.onrender.com/api/v1/authenticate"}

                >Join the Waitlist</button>
              </div>
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default Header
