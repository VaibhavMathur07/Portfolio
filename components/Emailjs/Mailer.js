import emailjs from "emailjs-com";

const mail = ({ name, email, message }) => {
  return emailjs.send(/* your email sending logic here */);
}

export default mail;
