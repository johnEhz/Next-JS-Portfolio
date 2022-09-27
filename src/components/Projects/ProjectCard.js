import React from "react";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div
      id={`project-card-${project.id}`}
      className="max-w-xs text-slate-300 rounded-lg flex flex-col shadow-xl shadow-black"
    >
      <Image
        className="bg-white max-w-xl relative z-0 rounded-t-md"
        src="https://www.xtrafondos.com/wallpapers/resized/paisaje-digital-en-atardecer-5846.jpg?s=large"
        alt="Some alt"
        width={400}
        height={280}
      ></Image>
      <div id="card-body" className="flex flex-col p-6 gap-4 w-full h-72 bg-neutral-800">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div id="card-footer" className="rounded-b-md bg-neutral-500 px-6 py-3 h-12">
          <h1>Tecs</h1>
        </div>
    </div>
  );
};

export default ProjectCard;
