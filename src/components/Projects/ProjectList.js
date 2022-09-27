import React, { useState } from "react";
import { projectList } from "../../data";

import ProjectCard from '../Projects/ProjectCard'

const ProjectList = () => {
  const [projects, setProjects] = useState(projectList);

  return (
    <section
      id="projects"
      className="bg-neutral-900 py-20 p-6 justify-center items-center"
    >
      <h1 className="font-serif font-normal text-3xl tracking-wider text-slate-300 text-center mb-12">
        {projects.length} Projects
      </h1>
      <div id="projectList" className="flex space-x-10 justify-center items-center">
        {
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
      </div>
    </section>
  );
};

export default ProjectList;
