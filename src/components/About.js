import React, { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaRegAddressBook } from "react-icons/fa";
import aboutImage from "../../public/images/me.jpg";
import Image from "next/image";

//Typed Library
import Typed from "typed.js";

const About = () => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Desarrollador Front-End.", "Ingeniero de Software."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-neutral-800 flex flex-col items-center justify-center px-5 py-14 w-full md:h-screen md:min-h-[830px] md:-mt-16"
      >
        <div className="max-w-5xl w-full flex flex-col items-center gap-16 md:p-2">
          <h1 className="text-4xl font-bold tracking-tighter text-neutral-700 dark:text-gray-200 px-4 w-full text-center">
            Sobre mi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:px-5 gap-5 sm:gap-5">
            <div className="w-full flex justify-center">
              <div className="w-full flex justify-center max-w-md">
                <Image
                  className="bg-white z-0 shadow-xl shadow-black rounded-lg border border-gray-600 h-auto"
                  src={aboutImage}
                  alt="John Hernandez"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:px-3 md:py-4 max-w-xl">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Soy John Hernández</h1>
                <div className="flex text-2xl gap-1 items-center" >
                  <h1
                    className="text-blue-500 font-semibold"
                    ref={element}
                  >
                    {" "}
                  </h1>
                </div>
                <p className="text-lg font-normal text-neutral-800 dark:text-gray-300">
                  Desarrollador de Software Front-End con 21 años de edad
                  residente en
                  <span className="text-blue-500 font-semibold"> Colombia</span>
                  , apasionado por la tecnología y el desarrollo de aplicaciones
                  en ambientes web, escritorio y movil.
                </p>
              </div>
              <ul className="text-md grid grid-cols-4 grid-rows-2 text-neutral-600 dark:text-neutral-300 items-center gap-3 w-full h-full">
                <li className="flex flex-col items-center row-span-1 col-span-2">
                  <span className="text-blue-500 font-semibold">· Ciudad</span>
                  Medellín
                </li>
                <li className="flex flex-col items-center row-span-1 col-span-2">
                  <span className="text-blue-500 font-semibold">
                    · Zona horaria
                  </span>
                  UTC-5
                </li>
                <li className="flex flex-col items-center row-span-2 col-span-4">
                  <span className="text-blue-500 font-semibold">· Email</span>
                  johnhdz.160@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="flex text-sm gap-6 flex-col md:flex-row justify-center items-center w-full">
            <a
              href="https://www.linkedin.com/in/john-eh/"
              target="_blank"
              rel="noreferrer"
              className="text-lg flex flex-row gap-4 justify-center items-center text-white hover:text-blue-600 bg-blue-600 hover:bg-transparent dark:hover:bg-transparent border border-transparent hover:border-blue-600 hover:drop-shadow-lg hover:shadow-blue-600 max-w-sm w-full h-11 rounded-md transition-colors"
            >
              <FaLinkedin size={25} />
              LinkedIn
            </a>
            <a
              href="https://github.com/johnEhz"
              target="_blank"
              rel="noreferrer"
              className="text-lg flex flex-row gap-4 justify-center items-center text-white hover:text-black bg-black hover:bg-white border border-transparent hover:border-black hover:drop-shadow-lg hover:shadow-black max-w-sm w-full h-11 rounded-md transition-colors"
            >
              <FaGithub size={25} />
              GitHub
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-lg flex flex-row gap-4 justify-center items-center text-white hover:text-[#de6f00] bg-[#de6f00] hover:bg-transparent dark:hover:bg-transparent border border-transparent hover:border-[#de6f00] hover:drop-shadow-lg hover:shadow-[#de6f00] max-w-sm w-full h-11 rounded-md transition-colors"
            >
              <FaRegAddressBook size={22} />
              Curriculum
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
