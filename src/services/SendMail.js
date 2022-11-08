import emailjs from "emailjs-com";

export default function sendMail(form) {
    const { SERVICE_ID,  TEMPLATE_ID, API_KEY_ID} = process.env;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, API_KEY_ID)
    .then((result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
