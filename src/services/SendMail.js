import emailjs from "emailjs-com";

export default function sendMail(form) {
    const SERVICE_ID = process.env.SERVICE_ID;
    const TEMPLATE_ID = process.env.TEMPLATE_ID;
    const API_KEY_ID = process.env.API_KEY_ID;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, API_KEY_ID)
    .then((result) => {
        console.log(result.text);
      },
      (error) => {
        console.error(error.text);
      }
    );
}
