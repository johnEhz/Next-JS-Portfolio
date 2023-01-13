import React from "react";
import Tech from "./Tech";
import techs from '../../json/techs.json'

const TechList = () => {
  return (
    <section
      id="techs"
      className="bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-neutral-800 py-14 items-center flex flex-col"
    >
      <h1 className="text-4xl mb-10 font-bold tracking-tighter text-neutral-700 dark:text-gray-200 px-4 text-center">
        Lenguajes y tecnologías
      </h1>
      <ul
        id="techList"
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12 gap-5 justify-center max-w-4xl px-4"
      >
        {techs.map((tech) => (
          <li key={tech.id}>
            <Tech tech={tech} />
          </li>
        ))}
      </ul>
    </section>
  );
};


export default TechList;
