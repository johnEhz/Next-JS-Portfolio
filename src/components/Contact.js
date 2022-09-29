import React from "react";
import CustomBtn from "../components/CustomBtn";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col bg-neutral-800 py-20 px-8 items-center"
    >
      <h1 className="font-serif font-normal text-3xl text-yellow-200 mb-12">
        {`{ Contactame! }`}
      </h1>
      <form
        className="flex w-10/12 flex-col space-y-8 bg-neutral-700 p-6 rounded-lg shadow-xl shadow-neutral-900 text-lg"
        onClick={() => console.log("form submitted!")}
      >
        <input
          className="px-4 py-3 rounded-lg bg-neutral-200 w-full focus:outline-none hover:scale-[1.01] transition duration-200 ease-in-out"
          placeholder="Nombre"
          required
          type="text"
        />
        <input
          className="px-4 py-3 rounded-lg bg-neutral-200 w-full focus:outline-none hover:scale-[1.01] transition duration-200 ease-in-out"
          placeholder="Correo"
          required
          type="email"
        />
        <textarea
          className="px-4 py-3 rounded-lg bg-neutral-200 w-full focus:outline-none hover:scale-[1.0] transition duration-200 ease-in-out"
          placeholder="Mensaje"
          rows={4}
          required
          type="text"
        />
        <button className="flex gap-2 bg-yellow-200 hover:bg-yellow-300 w-32 p-2 justify-center items-center font-semibold rounded-lg text-base">
          Enviar
          <BiMailSend size={28} />
        </button>
      </form>
    </section>
  );
};

export default Contact;
