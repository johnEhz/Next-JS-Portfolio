import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaDev } from "react-icons/fa";
import { MdDone } from "react-icons/md";

//Helpers
import getDaysDiff from "../../helpers/getDaysDiff";
import renderTech from "../../helpers/renderTech";

//Modal
import ModalProject from "./../ModalProject";

const ProjectCard = ({ project }) => {
  const router = useRouter();

  return (
    <>
      <ModalProject project={project} />
      <div
        id={`project-card-${project.id}`}
        className="max-w-xs text-slate-300 rounded-lg flex flex-col shadow-xl shadow-black cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
      >
        <h1 className="font-sans bg-gradient-to-tr from-yellow-200 to-yellow-600 px-2 py-0.5 text-center rounded-xl absolute z-20 text-black text-sm font-normal tracking-wider italic -mt-3 -ml-3 flex gap-2">
          {getDaysDiff(project.date) < 7 ? "Nuevo!" : project.date}
          {project.status ? (
            <MdDone
              className="text-green-700"
              title="Proyecto finalizado"
              size={20}
            />
          ) : (
            <FaDev
              className="text-red-700"
              title="Proyecto en desarrollo"
              size={20}
            />
          )}
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
          className="flex flex-col py-6 px-2 gap-5 w-full h-72 bg-gradient-to-tr via-neutral-700 from-neutral-800"
        >
          <h1 className="text-center font-bold text-2xl">{project.title}</h1>
          <div className="overflow-auto px-4">
            <p className="text-justify text-gray-400 text-lg">
              {project.description}
            </p>
          </div>
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
    </>
  );
};

export default ProjectCard;
