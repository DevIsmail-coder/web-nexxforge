import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {

 const navigate = useNavigate() 


  return (
    <footer 
    style={{ fontFamily: "'Montserrat', sans-serif" }}
    className="w-full flex items-baseline md:items-center flex-col bg-black text-white py-10 px-4">
       <main className="w-[80%]">
      <div className="w-45 bg-white flex items-center justify-center rounded-[3px] object-cover">
        <img src="/WhatsApp_Image_2025-09-10_at_14.38.28-removebg-preview 1.png" alt="logo" className="h-15 w-full object-contain"  />
      </div>
      <div className="w-full mt-15 flex flex-col items-end md:flex-row justify-between gap-10">
        <div className="w-full text-[20px] font-[450]">
          <p className="mt-2">Get in touch</p>
          <a
            href="https://forms.gle/dXxhCgjkcy91MBwQ9"
            className="text-gray-200 hover:text-white"
          >
            Nexxforge@gmail.com
          </a>
        </div>

        <div className="w-full text-[20px] font-[450]">
          <h4> Our Socials</h4>

            <div className="flex items-center space-x-4">
                 <a href="https://www.linkedin.com/company/nexxforge/" className="text-gray-700 hover:text-purple-700">
                  <FaLinkedin color="white" size={25} />
              </a>
              <a href="https://www.facebook.com/share/17Wyc1BWaY/?mibextid=wwXIfr" className="text-gray-700 hover:text-purple-700">
                  <FaFacebook color="white" size={25} />
              </a>
              <a href="https://www.youtube.com/channel/UCgOU1yQcn0hNzNtvAau5IQQ" className="text-gray-700 hover:text-purple-700">
                  <FaYoutube color="white" size={25} />
              </a>
              <a href="https://www.instagram.com/nexx_forge" className="text-gray-700 hover:text-purple-700">
                  <RiInstagramFill color="white" size={25}  />
              </a>

              <p>@Nexxforge</p>
            </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col space-y-2 text-[20px] font-[450] cursor-pointer">
          <p onClick={() => navigate("/")} className="hover:text-gray-300">
            Home
          </p>
          <p onClick={() => navigate("/about-us")} className="hover:text-gray-300">
            About
          </p>
          <p onClick={() => navigate("/contact-us")} className="hover:text-gray-300">
            Contact
          </p>
        </div>
      </div>
      </main>

      <div className="w-full text-[10px] font-light text-center md:text-[20px] md:font-[450] text-[#FFFFFF] mt-6 border-t-[1.2px] border-[#FFFFFF] pt-4">
        © {new Date().getFullYear()} NexxForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
