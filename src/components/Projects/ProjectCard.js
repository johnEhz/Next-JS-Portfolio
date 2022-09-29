import React from "react";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { DiNodejsSmall, DiJavascript1 } from "react-icons/di";
import { useRouter } from "next/router";

import Image from "next/image";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  const renderTech = (tech, size, title = "Tech") => {
    switch (tech) {
      case "ReactJS":
        return <FaReact size={size} title={title} />;
      case "TailwindCSS":
        return <TbBrandTailwind size={size} title={title} />;
      case "NextJS":
        return <TbBrandNextjs size={size} title={title} />;
      case "JS":
        return <DiJavascript1 size={size} title={title} />;
      case "NodeJS":
        return <DiNodejsSmall size={size} title={title} />;
      case "MongoDB":
        return <SiMongodb size={size} title={title} />;
      case "Redux":
        return <SiRedux size={size} title={title} />;
      default:
        return null;
    }
  };

  const getDaysDiff = (date) => {
    const day = new Date(date);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = new Date(mm + '/' + dd + '/' + yyyy);
    const timeDiff = today.getTime() - day.getTime();

    return timeDiff / (1000 * 3600 * 24)
  }

  return (
      <div
        id={`project-card-${project.id}`}
        className="max-w-xs text-slate-300 rounded-lg flex flex-col shadow-xl shadow-black cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
      >
        <h1 className="font-sans bg-gradient-to-tr from-yellow-200 to-yellow-600 px-2 py-0.5 text-center rounded-xl absolute z-20 text-black text-sm font-normal tracking-wider italic">
          {
            getDaysDiff(project.date) < 15 ? 'Nuevo!' : project.date
          }
        </h1>
        <Image
          className="bg-white max-w-xl relative z-0 rounded-t-md"
          src={project.img}
          alt={`project-${project.title}`}
          width={400}
          height={280}
        ></Image>
        <div
          id="card-body"
          className="flex flex-col p-6 gap-5 w-full h-72 bg-gradient-to-tr from-neutral-700 via-neutral-800"
        >
          <h1 className="text-center font-bold text-2xl">{project.title}</h1>
          <p className="text-justify text-gray-400 text-lg">
            {project.description}
          </p>
        </div>
        <div
          id="card-footer"
          className="rounded-b-md bg-neutral-700 px-6 py-3 h-16 flex flex-wrap space-x-4 text-yellow-300 items-center justify-center"
        >
          {project["techs"].map((tech) => (
            <span key={`${project.id}-${tech}`}>
              {renderTech(tech, 30, tech)}
            </span>
          ))}
        </div>
      </div>
  );
};

export default ProjectCard;
