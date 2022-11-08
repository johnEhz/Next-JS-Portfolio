import React from "react";
import Image from "next/image";

const Tech = ({ tech }) => {
  return (
    <div
      className="w-32 h-32 text-center items-center border-yellow-200
                 flex flex-col justify-center rounded-lg
                 hover:scale-110 hover:bg-neutral-700 transition duration-200 ease-in-out text-gray-200 gap-2 p-2"
    >
      <Image
        className="max-w-lg"
        src={tech.file}
        alt={tech.name}
        width={230}
        height={230}
        title={tech.name}
        loading="lazy"
      ></Image>
      <small className="text-xl">{tech.name}</small>
    </div>
  );
};

export default Tech;
