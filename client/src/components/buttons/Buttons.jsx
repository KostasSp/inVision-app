//same button for all home page, only inherit properties for the white one and override background and text colour
import "./Buttons.scss";

const Buttons = (props) => {
  return (
    <div>
      <button className={props.className} disabled>
        {props.buttonMessage}
      </button>
    </div>
  );
};

export default Buttons;
