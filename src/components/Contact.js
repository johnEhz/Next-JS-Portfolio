import React, { useState, useRef } from "react";
import CustomBtn from "../components/CustomBtn";
import { BiMailSend } from "react-icons/bi";
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
        toast.success("Email enviado satisfactoriamente!\nPronto te contestare 😃");
      } catch (error) {
        toast.error("Algo salió mal al intentar enviar el email...");
        console.log(error);
      }
      setCorrectUser(false);
      e.target.reset();
    } else {
      toast.warn("Complete la verificación...");
    }
  };

  const changeCaptcha = (e) => {
    e ? setCorrectUser(true) : setCorrectUser(false);
  };

  return (
    <section
      id="contact"
      className="text-center content-center grid bg-neutral-900 py-20 p-6"
    >
      <h1 className="font-serif font-normal text-3xl text-yellow-200 mb-12">
        {`Contactame !`}
      </h1>
      <form
        className="flex flex-col bg-neutral-800 gap-6 max-w-2xl w-full m-auto shadow-xl drop-shadow-md p-6 rounded mb-8"
        onSubmit={handleSubmit}
      >
        <input
          className="px-3 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="Tu nombre"
          required
          type="text"
          name="from_name"
        />
        <input
          className="px-4 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="yourmail@mail.com"
          required
          name="from_mail"
          type="email"
        />
        <textarea
          className="px-4 py-3 rounded-sm bg-neutral-200 w-full focus:outline-none"
          placeholder="Mensaje"
          rows={4}
          required
          name="message"
          type="text"
        />
        <button className="flex gap-2 bg-yellow-300 hover:bg-yellow-400 w-full p-2 justify-center items-center font-normal rounded-sm text-base self-center">
          Enviar
          <BiMailSend size={28} />
        </button>
        <div className="recapcha w-full flex justify-center">
          <ReCAPTCHA
            sitekey="6Lc0hhgjAAAAADoO8Nm9J_a9OpWktTh3D3vnY5S5"
            onChange={changeCaptcha}
            theme="dark"
          />
        </div>
      </form>
      <h2 className="text-neutral-400">
        Mi emaill:{" "}
        <span className="text-yellow-400 text-sm">johnhdz.160@gmail.com</span>
      </h2>
    </section>
  );
};

export default Contact;
