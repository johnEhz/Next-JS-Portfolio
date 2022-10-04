import React from "react";
import CustomBtn from "../components/CustomBtn";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-center content-center grid bg-neutral-800 py-20 p-6"
    >
      <h1 className="font-serif font-normal text-3xl text-yellow-200 mb-12">
        {`{ Contactame! }`}
      </h1>
      <form
        className="flex flex-col bg-neutral-700 gap-6 max-w-xl w-full m-auto shadow-xl drop-shadow-md p-6 rounded mb-8"
        onClick={() => console.log("form submitted!")}
      >
        <input
          className="px-3 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="Nombre"
          required
          type="text"
        />
        <input
          className="px-4 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="Correo"
          required
          type="email"
        />
        <textarea
          className="px-4 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="Mensaje"
          rows={4}
          required
          type="text"
        />
        <button className="flex gap-2 bg-yellow-200 hover:bg-yellow-300 w-full p-2 justify-center items-center font-normal rounded-sm text-base self-center">
          Enviar
          <BiMailSend size={28} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
