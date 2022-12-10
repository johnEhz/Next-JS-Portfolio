import React, { useState } from "react";
import Image from "next/image";

//Helpers
import renderTech from "../../helpers/renderTech";

const ProjectCard = ({ project }) => {
  return (
    <>
      <article id={`project-card-${project.id}`} className="min-w-xl max-w-xl w-full flex xl:flex-row flex-col">
        <div id="card-header" className="max-w-xl w-full bg-red-400">
          <Image
            className="bg-white"
            src={project.imgs[0]}
            alt={`project-${project.title}`}
            width={300}
            height={300}
            loading="lazy"
          ></Image>
        </div>
        <div id="main-content">
          <div
            id="card-body"
            className="flex flex-col py-6 px-2 gap-5 w-full h-72 bg-gradient-to-tr via-neutral-700 from-neutral-800 cursor-default"
          >
            <h1 className="text-center font-bold text-2xl">{project.title}</h1>
            <div className="overflow-auto px-4">
              <p className="text-justify text-gray-400 text-lg">
                {project.description.length > 180
                  ? `${project.description.substring(0, 180)}...`
                  : project.description}
              </p>
            </div>
          </div>
          <div
            id="card-footer"
            className="rounded-b-md bg-neutral-700 px-6 py-3 h-16 flex flex-wrap space-x-4 text-yellow-300 items-center justify-center cursor-default"
          >
            {project["techs"].map((tech) => (
              <span key={`${project.id}-${tech}`}>
                {renderTech({ tech: tech, size: 30, title: tech })}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
