import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import projects from '../../json/projects.json'

const ProjectList = () => {
  return (
    <section
      id="projects"
      className="dark:bg-[#111111] border-b border-gray-200 dark:border-neutral-800 py-14 px-4 items-center flex flex-col"
    >
      <h1 className="text-4xl mb-10 font-bold tracking-tighter text-neutral-700 dark:text-gray-200 px-4 text-center">
        Proyectos
      </h1>
      <ul
        id="projectList"
        className="grid grd-cols-1 xl:grid-cols-2 gap-12 max-w-8xl 2xl:px-5"
      >
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};


export default ProjectList;
