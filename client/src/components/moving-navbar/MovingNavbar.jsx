import InVision from "../../assets/logo-icon-v2.png";
import CodeIcon from "../../assets/html-icon.svg";
import CommentIcon from "../../assets/Comment_Icon.svg";
import SearchIcon from "../../assets/Search_Icon.svg";
import ViewIcon from "../../assets/View_Icon.svg";
import "./MovingNavbar.scss";

const MovingNavbar = () => {
  return (
    <div className="moving-bar">
      <div className="moving-bar-items">
        <div className="invision-wrapper">
          <img
            className="invision-icon"
            src={InVision}
            alt="inVision-icon"
          ></img>
          <p>Made in inVision</p>
        </div>

        <div className="moving-bar-last-items">
          {/* -----> these could be hidden by simply reducing and expanding the max width on hover? <------*/}
          <ul>
            <div className="comment-wrapper">
              <img
                className="comment-icon"
                src={CommentIcon}
                alt="code-icon"
              ></img>
            </div>
          </ul>
          <ul>
            <div className="search-wrapper">
              <img
                className="search-icon"
                src={SearchIcon}
                alt="search-icon"
              ></img>
            </div>
          </ul>
          <ul>
            <div className="code-wrapper">
              <img className="code-icon" src={CodeIcon} alt="code-icon"></img>
            </div>
          </ul>
          <ul>
            <div className="view-wrapper">
              <img className="view-icon" src={ViewIcon} alt="view-icon"></img>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovingNavbar;
