import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-neutral-800 flex flex-col items-center py-20 p-6 space-y-20 w-full"
      >
        <Image
          loading="lazy"
          className="bg-white max-w-2xl rounded-full z-0 shadow-md shadow-black"
          src="/images/me.jpg"
          alt="John Hernandez"
          width={400}
          height={400}
        ></Image>
        <div className="text-3xl text-slate-300 font-sans font-semibold space-y-3 tracking-wider max-w-xl">
          <h1 className="font-serif font-normal">Soy John Hernández</h1>
          <h1 className="text-yellow-300 text-2xl text-normal">Ingeniero de Software</h1>
          <p className="text-lg font-normal text-slate-300 tracking-wide text-justify">
            Desarrollador de Software Front-End con 21 años de edad residente en
            <span className="text-yellow-300"> Colombia</span>, apasionado por
            la tecnología y el desarrollo de aplicaciones en ambientes web,
            escritorio y movil.
          </p>
          <div className="flex text-sm space-x-6 pt-3">
            <a
              href="https://www.linkedin.com/in/john-eh/"
              target="_blank"
              rel="noreferrer"
            >
              <CustomBtn text="LinkedIn">
                <FaLinkedin size={25} />
              </CustomBtn>
            </a>
            <a
              href="https://github.com/johnEhz"
              target="_blank"
              rel="noreferrer"
            >
              <CustomBtn text="GitHub">
                <FaGithub size={25} />
              </CustomBtn>
            </a>
            <a href="/CV.pdf" target="_blank" rel="noreferrer">
              <CustomBtn
                text="Open CV"
              >
                <MdContactPage size={25} />
              </CustomBtn>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
