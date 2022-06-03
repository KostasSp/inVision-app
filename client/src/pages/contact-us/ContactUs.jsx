import ImageContact from "../../assets/Img_Contact.png";
import DynamicForm from "../../components/dynamic-form/DynamicForm";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <DynamicForm />
      <img className="image-contact" src={ImageContact} alt="img-contact"></img>
    </div>
  );
};

export default ContactUs;
