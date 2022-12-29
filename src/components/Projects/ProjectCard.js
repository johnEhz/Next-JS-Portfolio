import React, { useState } from "react";
import { AiFillFolderOpen, AiOutlineEye, AiFillGithub } from "react-icons/ai";
import ProjectPreview from "../ProjectPreview";

//Helpers
import renderTech from "../../helpers/renderTech";

const ProjectCard = ({ project }) => {
  const [showPreview, setShowPreview] = useState(false);
  const toggleShowPreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <ProjectPreview
        show={showPreview}
        toggleShowPreview={toggleShowPreview}
        project={project}
      />
      <article
        id={`project-card-${project.id}`}
        className="min-w-xl max-w-xl w-full flex xl:flex-row flex-col border border-neutral-200 dark:bg-black dark:border-neutral-800"
      >
        <div
          id="card-header"
          className="bg-gray-50 dark:bg-neutral-900 flex flex-col justify-center items-center p-10 border-b xl:border-none border-neutral-200"
        >
          <AiFillFolderOpen size={100} className="text-blue-600" />
          <button
            onClick={toggleShowPreview}
            className="flex flex-row items-center gap-1 hover:text-blue-600 dark:hover:text-blue-600 transition-all text-neutral-600 dark:text-neutral-300 text-sm"
          >
            Preview
            <AiOutlineEye />
          </button>
        </div>
        <div id="card-body" className="flex flex-col gap-2 h-full">
          <div className="p-4 gap-2 flex flex-col">
            <h1 className="font-semibold tracking-wide text-lg uppercase dark:text-neutral-200">
              {project.title}
            </h1>
            <div className="h-[150px] overflow-y-auto dark:text-neutral-400">
              <p className="break-word">{project.description}</p>
            </div>
          </div>
          <div className="px-4 flex justify-start">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="justify-end flex flex-row items-center gap-2 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-600 transition-colors"
            >
              <AiFillGithub size={20} />
              GitHub
            </a>
          </div>
          <div className="bottom-0 w-full bg-gray-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
            <ul className="w-full flex py-3 px-8 justify-end gap-5 text-black dark:text-neutral-300">
              {project.techs.map((item) => (
                <li key={item}>
                  {renderTech({ tech: item, size: 22, title: item })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectCard;
