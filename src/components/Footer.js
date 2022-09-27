import React from "react";
import Logo from "./Logo";
import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 p-8 space-y-5 text-center text-slate-400 shadow-lg font-mono border-t-2">
      <ul className="flex space-x-24 w-full justify-center">
        <li className="hover:text-yellow-200 ease-in duration-200">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/john-eh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
        </li>
        <li className="hover:text-yellow-200 ease-in duration-200">
          <a
            title="GitHub"
            href="https://github.com/johnEhz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
        </li>
        <li className="hover:text-yellow-200 ease-in duration-200 cursor-pointer">
          <a
            href="mailto:johnhdz.160@gmail.com"
            title="Mail"
          >
            <SiGmail size={32} />
          </a>
        </li>
      </ul>
      <span className="flex flex-col text-slate-400 italic text-normal space-y-2">
        <h1>Page created using</h1>
        <ul className="flex space-x-8 justify-center">
          <li>
            <FaReact size={22} title="React"/>
          </li>
          <li>
            <TbBrandNextjs size={22} title="Next JS" />
          </li>
          <li>
            <TbBrandTailwind size={22} title="Tailwind CSS V3" />
          </li>
        </ul>
        <Logo />
      </span>
    </footer>
  );
};

export default Footer;
