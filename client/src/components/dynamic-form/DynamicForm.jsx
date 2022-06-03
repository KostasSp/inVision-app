import { useState, useRef } from "react";
import { initialFields, addressFields } from "./FormFields";
import "./DynamicForm.scss";
import FormSentMessage from "../form-sent-message/FormSentMessage";
import "../../pages/contact-us/ContactUs.scss";
import IconSubmit from "../../assets/Icon_Submit.svg";

const DynamicForm = () => {
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formFields, setFormFields] = useState(initialFields);
  const optionalPhoneAdded = useRef(false);
  const NUM_OF_ADDRESS_FIELDS = 6;

  //inserts/removes address fields
  const handleChangeChk = (chkValue) => {
    if (chkValue.target.checked) {
      setShowAddressFields(true);
      setFormFields(addressFields(formFields));
    } else {
      setShowAddressFields(false);
      formFields.splice(
        formFields.length - NUM_OF_ADDRESS_FIELDS,
        formFields.length
      );
      setFormFields(formFields);
    }
  };

  //inserts 2nd phone field in the corrent list position
  const addOptionalPhone = () => {
    if (optionalPhoneAdded.current === true) return;
    let first = formFields.slice(0, 3);
    let last = formFields.slice(3, formFields.length);
    setFormFields([
      ...first,
      {
        label: "Phone number 02 - optional",
        type: "text",
      },
      ...last,
    ]);
    optionalPhoneAdded.current = true;
  };

  const handleChange = (i, e) => {
    let newformFields = [...formFields];
    newformFields[i].value = e.target.value;
    setFormFields(newformFields);
  };

  //sends form data to an external API (made with a simple express.js backend)
  const sendToAPI = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formFields.entries()),
    })
      .then((response) =>
        //if response is OK (200), then display check mark component
        response.status === 200 ? setFormSent(true) : setFormSent(false)
      )

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={(e) => sendToAPI(e)}>
      <div className="contact-title">
        <h3>Contact us</h3>
        <p>
          sl eget enim porta blandit a nec sapien. Mauris porttit wants arcu ul
          bla a nec sapi tit wants arc
        </p>
      </div>

      {!formSent ? (
        formFields.map((element, index) => (
          <div className="container" key={index}>
            <label for="name" className="contact-form-label">
              {element.label}
            </label>
            {/* if labels include optional field keywords, then the input does not include a "required" attribute */}
            {element.label.includes("Phone") ||
            element.label.includes("line 2") ? (
              <div>
                <input
                  type={element.type}
                  className={"col" + index}
                  value={element.value}
                  id="name"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            ) : (
              <div>
                <input
                  type={element.type}
                  className={"col" + index}
                  value={element.value}
                  required
                  id="name"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            )}
            {index === 2 ? (
              <div className="add-phone" onClick={() => addOptionalPhone()}>
                Add new phone number
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : (
        <FormSentMessage />
      )}
      {!formSent ? (
        <div className="last-fields">
          <div className="message-field">
            <label for="message">message</label>
            <input
              type="text"
              name="message"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="check-box">
            <input
              type="checkbox"
              checked={showAddressFields}
              onChange={(event) => {
                handleChangeChk(event);
              }}
            />{" "}
            Add address details
          </div>
          <div className="button-section">
            <button className="submit-button" type="submit">
              <img className="icon-submit" src={IconSubmit} alt="icon" />
              Submit
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default DynamicForm;
