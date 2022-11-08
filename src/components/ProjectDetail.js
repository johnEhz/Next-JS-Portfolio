import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import getDaysDiff from "../helpers/getDaysDiff";

const ProjectDetail = ({ show, setShow, project }) => {
  return (
    <>
      {show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-12">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t items-center">
                  <h3 className="text-3xl font-semibold text-slate-200">
                    {project.title}
                  </h3>
                  <small className="text-xl text-green-300">
                    Hace {getDaysDiff(project.date)} días
                  </small>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col">
                  <div className="text-slate-200 text-lg">
                    <h3>
                      Fecha de creación:{" "}
                      <span className="text-green-400">{project.date}</span>
                    </h3>
                    <h3>
                      Estado:{" "}
                      <span
                        className={
                          project.status ? "text-green-400" : "text-red-400"
                        }
                      >
                        {project.status ? "Finalizado" : "En desarrollo"}
                      </span>
                    </h3>
                  </div>
                  <div className="text-justify h-30 overflow-y-auto">
                    <p className="my-4 text-slate-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    {project.imgs.map((img, index) => (
                      <Image
                        key={index}
                        className="max-w-xl relative z-0 rounded-t-md hover:scale-[1.10] transition duration-200 ease-in-out cursor-pointer"
                        src={img}
                        alt={`project-${project.title}-${index}`}
                        width={600}
                        height={480}
                        loading="lazy"
                      ></Image>
                    ))}
                  </div>
                  <div className="flex justify-center pt-10">
                    {project.githubLink ? (
                      <a href={project.githubLink} target="__blank">
                        <button className="bg-yellow-300 px-3 py-2 rounded flex items-center gap-3 text-lg font-normal hover:bg-yellow-200">
                          Visitar proyecto
                          <FaGithub size={30} />
                        </button>
                      </a>
                    ) : (
                      <small className="text-red-300 text-lg">
                        Proyecto privado
                      </small>
                    )}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ProjectDetail;
