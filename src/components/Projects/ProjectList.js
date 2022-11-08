import React, { useState } from "react";
import { projectList } from "../../data";
import { HiOutlineCode } from 'react-icons/hi'

import ProjectCard from '../Projects/ProjectCard'

const ProjectList = () => {
  const [projects, setProjects] = useState(projectList);

  return (
    <section
      id="projects"
      className="bg-neutral-800 py-20 p-6 items-center flex flex-col"
    >
      <h1 className="font-serif font-normal text-3xl tracking-wider items-center justify-center mb-12 text-yellow-200 flex gap-3">
        {projects.length} Proyectos y más en en desarrollo!
        <HiOutlineCode size={35}/>
      </h1>
      <div id="projectList" className="flex flex-wrap gap-12 justify-center max-w-7xl">
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
