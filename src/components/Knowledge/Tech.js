import React from "react";
import Image from "next/image";

const Tech = ({ tech }) => {
  return (
    <div
      className="grid grid-cols-2 max-w-[280px] w-full rounded-lg p-4 border border-gray-200 dark:border-neutral-700 shadow-xl shadow-gray-100 dark:shadow-[#1c1c1c] transition-all hover:scale-[1.05] cursor-pointer hover:bg-gray-50 hover:dark:bg-neutral-900 hover:border-[#d5d5d5] custom-background-lines"
    >
      <Image
        src={tech.file}
        alt={tech.name}
        width={70}
        height={70}
        title={tech.name}
        loading="lazy"
      ></Image>
      <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-300 flex justify-center items-center">{tech.name}</h3>
    </div>
  );
};

export default Tech;
