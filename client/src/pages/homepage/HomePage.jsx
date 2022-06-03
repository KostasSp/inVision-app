import MidPicture from "../../assets/shutterstock_696636415.jpg";
import SecondModel from "../../assets/shutterstock_1302552622.jpg";
import "./HomePage.scss";
import Buttons from "../../components/buttons/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useState, useEffect } from "react";
import IconArrow from "../../assets/Icon_Arrow.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [swiper, setSwiper] = useState(null);
  const [bannerData, setBannerData] = useState(null);

  //makes the API call and stores fetched data in local storage, for faster loading
  const fetchAPI = async () => {
    const fetchData = await fetch("http://localhost:5000/getAPI");
    const json = await fetchData.json();
    setBannerData(json);
    localStorage.setItem("bannerData", JSON.stringify(json));
  };

  //if local storage does not include the required API data, this calls the fetch function
  useEffect(() => {
    localStorage.getItem("bannerData") == null
      ? fetchAPI()
      : setBannerData(JSON.parse(localStorage.getItem("bannerData")));
  }, []);

  return (
    <div>
      <Swiper
        modules={Navigation}
        spaceBetween={5}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <div className="model-parent-div">
          <SwiperSlide>
            {bannerData != null ? (
              <img
                className="model-image"
                src={bannerData.Details[0].ImageUrl}
                alt="model"
              />
            ) : (
              <div className="loading-message">Loading images...</div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {bannerData != null && (
              <img
                className="model-image"
                src={bannerData.Details[1].ImageUrl}
                alt="mid-model"
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {bannerData != null && (
              <img
                className="model-image"
                src={bannerData.Details[2].ImageUrl}
                alt="mid-model"
              />
            )}
          </SwiperSlide>
        </div>
        <div className="icon-arrow-left" onClick={() => swiper.slidePrev()}>
          <img className="icon-arrow" src={IconArrow} alt="model"></img>
        </div>
        <div className="icon-arrow-right" onClick={() => swiper.slideNext()}>
          <img className="icon-arrow" src={IconArrow} alt="model"></img>
        </div>
      </Swiper>

      <div className="mid-div">
        <article className="article">
          <p style={{ fontSize: "19px" }}>
            Sed ut perspiciatis unde omnis iste natus error
          </p>
          <p style={{ fontSize: "10px", opacity: "0.8" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequu
          </p>

          <ul className="mid-div-list">
            <li>aspernatur aut odit aut fugit, sed quia </li>
            <li>i architecto beatae vitae veritatis et quasi architecto </li>
            <li>accusantium doloremque </li>
            <li>accusantium doloremque laudantium ipsam</li>
          </ul>
          <Buttons
            className="home-mid-section-button"
            buttonMessage={"Learn more"}
          />
        </article>

        <img className="mid-div-pic" src={MidPicture} alt="mid-model"></img>
      </div>
      <div className="second-model-parent-div">
        <img
          className="second-model-image"
          src={SecondModel}
          alt="mid-model"
        ></img>
        <div className="second-model-image-contents">
          <div className="second-model-image-contents-items">
            <h2>Donec ac interdum du, quis finibus lectus, Cra Kan auctor</h2>
            <p>
              Suspendisse vel stacipit dolor, nec laoreet nulla. Kan auctor
              ultrices dapibus. Donec ac interdum du, quis finibus lectus, Cras
              in utrices neque Curabitur get turpis iaculls dam congue sagittis
              awet ligula Mauris ut arcu ex Nullam quis orci ante. Nunc felis
              massa Donec ac interdum du, quis finibus lectus, Cras in utrices
              neque Curabitur g
            </p>
            <Buttons className="login-button" buttonMessage={"Log in"} />
          </div>
        </div>
      </div>
      <div className="home-bottom-title">
        <div>At vero eos et accusamus et iusto odio dignissimos</div>
        <div className="home-bottom-subtitle">At vero eos odio dignissimos</div>
      </div>
      <div className="home-bottom">
        {/* maybe just add 3 divs with fixed width next to each other, and add space? */}
        <div className="home-bottom-text">
          {" "}
          <p>
            Sed libero justo,lobortis sit amet suscipit non taria duo ut vis vel
            auris semper abhorreant Petentesque ac condimentum felis.
            Suspendisse vel stacipit dolor, nec laoreet nulla. Kan auctor
            ultrices dapibus. Donec ac interdum du, quis finibus lectus, Cras in
            utrices neque Curabitur get turpis iaculls dam congue sagittis awet
            ligula Mauris ut arcu ex Nullam quis orci ante. Nunc felis massa
            posuere non gravida in
          </p>
          <p>
            commodo in arcu. in feugiat magna non volutpat faucibus. Nam aliquam
            nec aliquam laculupendstique vemendCras matti Integer laoreet
            puhinar slt pulvinar fermentum. Morbi whicula sodales munc ac
            varius. Proin porttitor porttitor Stero vel pharetra. Cras
            stambusmaga Or was natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec magnis dis parturient montes,
            nascetur ridiculus mus. Donec bullirem maits lacinia. Fusce ut arcu
            gus Pataugue eo, pentesque ut macmus non, sand velit maemus ac
            quisque us hendrerit es et tincidunt.
          </p>
          <p>
            kamagra un placerat fringin saddam porttitor am, Curabitur sot, erar
            sitatrique volutpat augue lectus ignem jtat faucibusorientat Sed sed
            sapien prium, maximus hils vel mats at, sed ibere jutt, loor samer
            suscipt non, autor non Ibero Maeces quis nisl eget enim porta
            blandit a nec sapien. Mauris porttit wants arcu ulamcorper sit amet.
            Mula facis Prom neque ut tortor acrsque at iaculs nunc amare,
            Palentesque non nunceula, interdum et maresuada fames ac ante ipsum
            augue nouctor qum placerat neac Nola sem urna, dictum sed nisi in
            viverra numum neque Aluam ipsu nunc, porta a and egntasutrices
            Prontante Curabitur fringa Tels a porttitor maus Vestque
          </p>
        </div>
      </div>
      <div className="bottom-button-div">
        <Link to="/contact-us">
          <Buttons
            className="home-mid-section-button"
            buttonMessage={"Contact us"}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
