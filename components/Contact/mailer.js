import emailjs from "emailjs-com";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_aeudzxa",
    "template_b5o0s0o",
    { name, email, message },
    "ErAOFWktsREjELqqO"
  );
};

export default mail;
