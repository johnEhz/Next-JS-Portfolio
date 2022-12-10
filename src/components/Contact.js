import React, { useState } from "react";
import { toast } from "react-toastify";
import SendMail from "../services/SendMail";

//Captcha
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [corretUser, setCorrectUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (corretUser) {
      try {
        SendMail(e.target);
        toast.success(
          "Email enviado satisfactoriamente!\nPronto te contestare."
        );
      } catch (error) {
        toast.error("Algo salió mal al intentar enviar el email.\n");
        console.log(error);
      }
      setCorrectUser(false);
      e.target.reset();
    } else {
      toast.warn("Por favor, Complete la verificación 🤖.");
    }
  };

  const changeCaptcha = (e) => {
    e ? setCorrectUser(true) : setCorrectUser(false);
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-black border-b border-gray-200 dark:border-neutral-800 text-center content-center flex flex-col items-center justify-center py-16 gap-8"
    >
      <div className="grid grid-cols-1 px-5 gap-5 max-w-3xl w-full">
        <h1 className="text-4xl mb-10 font-bold tracking-tighter text-neutral-700 dark:text-gray-200 px-4 text-center">
          Contactame
        </h1>
        <form
          className="flex flex-col gap-3 w-full h-full text-lg text-neutral-800 dark:text-neutral-200"
          onSubmit={handleSubmit}
        >
          <input
            className="px-3 py-3 w-full focus:outline-none border-b-2 border-neutral-400 dark:border-neutral-700 bg-transparent placeholder:text-sm"
            placeholder="NOMBRE"
            required
            type="text"
            name="from_name"
          />
          <input
            className="px-4 py-3 w-full focus:outline-none border-b-2 border-neutral-400 dark:border-neutral-700 bg-transparent placeholder:text-sm"
            placeholder="EMAIL"
            required
            name="from_mail"
            type="email"
          />
          <textarea
            className="px-4 py-3 w-full focus:outline-none h-48 border-b-2 border-neutral-400 dark:border-neutral-700 bg-transparent placeholder:text-sm"
            placeholder="MENSAJE"
            rows={4}
            required
            name="message"
            type="text"
          />
          <div className="w-full flex justify-center sm:justify-end pt-5">
            <button className="font-semibold sm:w-44 w-full py-2 border-b-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors hover:rounded-md active:bg-blue-700 dark:text-white">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
      <div className="recapcha w-full flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.SITE_KEY}
            onChange={changeCaptcha}
            theme="light"
          />
        </div>
    </section>
  );
};

export default Contact;
