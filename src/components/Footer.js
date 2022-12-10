import React from "react";
import Logo from "./Logo";
import FooterSocial from "./FooterSocial";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import renderTech from "../helpers/renderTech";

const Footer = () => {
  return (
    <footer className="dark:bg-black bg-gray-50 pt-12 space-y-8 text-center dark:text-[#FFFFFF] text-neutral-600 flex flex-col">
      <ul className="flex gap-16 w-full justify-center">
        <li className="dark:hover:text-white hover:text-black ease-in duration-200">
          <FooterSocial
            SocialIcon={FaLinkedinIn}
            title="LinkedIn"
            href="https://www.linkedin.com/in/john-eh/"
          />
        </li>
        <li className="dark:hover:text-white hover:text-black ease-in duration-200">
          <FooterSocial
            SocialIcon={FaGithub}
            title="GitHub"
            href="https://github.com/johnEhz"
          />
        </li>
        <li className="dark:hover:text-white hover:text-black ease-in duration-200">
          <FooterSocial
            SocialIcon={FaTwitter}
            title="Twitter"
            href="https://twitter.com/JohzHz"
          />
        </li>
        <li className="dark:hover:text-white hover:text-black ease-in duration-200">
          <a href="mailto:johnhdz.160@gmail.com" title="Mail">
            <SiGmail size={28} />
          </a>
        </li>
      </ul>
      <div className="inline-flex flex-col md:items-end items-center md:pr-12 font-semibold italic gap-5">
        <div className="flex flex-col gap-2 dark:text-neutral-300 text-neutral-500">
          <p>Using</p>
          <ul className="flex flex-row gap-5">
            {
              <>
                <li>
                  {renderTech({ tech: "NextJS", size: 23, title: "NextJS" })}
                </li>
                <li>
                  {renderTech({
                    tech: "TailwindCSS",
                    size: 23,
                    title: "TailwindCSS",
                  })}
                </li>
                <li>{renderTech({ tech: "JS", size: 23, title: "JS" })}</li>
              </>
            }
          </ul>
        </div>
      </div>
      <div className="dark:bg-[#111111] bg-gray-100 dark:text-neutral-300 text-black py-4 border-t dark:border-neutral-800 border-gray-200">
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
