import { FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-4">
      <div className="w-30 ml-45 h-13 bg-white flex justify-center items-center">
        <img src="../src/assets/logo.png" alt="logo" className="w-40 h-10 " />
      </div>
      <div className="max-w-5xl mt-15 mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-sm mt-2">Get in touch</p>
          <a
            href="mailto:Nexxforge@gmail.com"
            className="text-sm text-gray-200 hover:text-white"
          >
            Nexxforge@gmail.com
          </a>
        </div>

        <div>
          <h4> Our Socials</h4>
          <div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-purple-700">
                <i className="fa-brands fa-facebook-f">
                  <FaFacebook color="white" size={20} />
                </i>
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                <i className="fa-brands fa-youTube">
                  <FaYoutube color="white" size={20} />
                </i>
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                <i className="fa-brands fa-instagram">
                  <RiInstagramFill color="white" size={20} />
                </i>
              </a>

              <p className="text-sm">@Nexxforge</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#home" className="text-sm hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-sm hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="text-sm hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NexxForge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
