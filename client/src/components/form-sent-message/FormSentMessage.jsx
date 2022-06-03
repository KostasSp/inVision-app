import "./FormSentMessage.scss";
import IconValid from "../../assets/Icon_Valid.svg";

const FormSentMessage = () => {
  return (
    <div className="message-container">
      <img className="icon-valid" src={IconValid} alt="model"></img>
      <h4>Your message has been sent</h4>
      <div>we will be in contact with you within 24 hours.</div>
    </div>
  );
};

export default FormSentMessage;
