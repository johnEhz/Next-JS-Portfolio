import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const ProjectPreview = ({ show, toggleShowPreview, project }) => {
  return (
    <>
      {show ? (
        <>
          <div className="w-full h-screen fixed bg-black bg-opacity-70 z-50 inset-0 p-8">
            <div className="w-full h-full gap-8 flex flex-col justify-center items-center">
              <div className="flex flex-row items-center">
                <h1 className="text-white uppercase font-bold tracking-wider text-xl text-center">
                  {project.title}
                </h1>
                <button onClick={toggleShowPreview} className="text-red-500 px-2 rounded-full text-2xl font-bold">
                  X
                </button>
              </div>

              <div className="max-w-screen overflow-x-auto">
                <ul className="">
                  {project.imgs.map((imgSource, idx) => (
                    <li
                      key={`${project.title}-${idx}`}
                      className="w-[375px] sm:w-[600px] h-[420px] sm:h-[500px] relative shrink"
                    >
                      <Image
                        className="object-contain"
                        src={imgSource}
                        alt={`${project.title}-${idx}`}
                        layout="fill"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row justify-end gap-5 font-semibold">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row items-center gap-2 text-blue-400"
                >
                  <FaGithub />
                  Visit Repository
                </a>
                <button onClick={toggleShowPreview} className="text-red-400">
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProjectPreview;
