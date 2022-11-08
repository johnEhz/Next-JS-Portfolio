import emailjs from "emailjs-com";

export default function sendMail(form) {
    emailjs.sendForm("service_y9de4ig", "template_vgujkob", form, "r7e6I_TnljlLgCTtO")
    .then((result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
