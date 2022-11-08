import React, { useState } from "react";
import { techList } from '../../data'
import Tech from './Tech'

const TechList = () => {
  const [techs, setTechs] = useState(techList)

  return (
    <section id="techs" className="bg-neutral-900 py-20 p-6 items-center flex flex-col">
      <h1 className="font-serif font-normal text-3xl tracking-wider items-center justify-center mb-12 text-yellow-200 flex gap-3">
        Lenguajes y tecnologías
      </h1>
      <div id="techList" className="flex flex-wrap gap-10 justify-center max-w-2xl">
      {
        techs.map(tech => (
            <Tech key={tech.id} tech={tech}/>
        ))
      }
      </div>
    </section>
  );
};

export default TechList;
