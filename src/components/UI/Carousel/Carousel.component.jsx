import React from "react";
import css from "./Carousel.module.css";
import bannerWhole from "../../../resources/images/bannerWhole.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import img1 from "../../../resources/images/universities/1.jpg";
import img2 from "../../../resources/images/universities/2.jpg";
import img3 from "../../../resources/images/universities/3.jpg";
import img4 from "../../../resources/images/universities/4.jpg";
import img5 from "../../../resources/images/universities/5.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = () => {
  return (
    <>
      <div className={css.slideShow}>
        <div className={css.slideShowFrame}>
          <div className={css.frame}>
            <img src={bannerWhole} alt="bannerPicture" />
          </div>
          <div className={css.content}>
            <div>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={2000}
                style={{ width: "90%" }}
              >
                <div data-src={img1} />
                <div data-src={img2} />
                <div data-src={img3} />
                <div data-src={img4} />
                <div data-src={img5} />
              </AutoplaySlider>
            </div>
          </div>
        </div>
      </div>
      <div className={css.carousel}></div>
    </>
  );
};

export default Carousel;
