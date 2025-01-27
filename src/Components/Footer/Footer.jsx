import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row  gap-1 justify-around bg-slate-950 h-[60vh] sm:h-[40vh]  text-xl font-semibold py-7">
      <div className="contacts-container flex flex-col  gap-3">
        <a href="" className="flex items-center gap-2">
          <CiPhone />
          874846346
        </a>
        <a href="" className="flex items-center gap-2 text-pretty">
          <SiGmail />
          dummyasjhgsg@gmail.com
        </a>
        <div className="social-links flex gap-3">
          <FaInstagram className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
      <div className="imp-links mt-5">
        <ul>
          <li>
            <Link to="/"> About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Job Assistance</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
