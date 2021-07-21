import React from "react";
import iPad from "../../../resources/images/ipad.png";
import css from "./Carousel.module.css";
const Carousel = () => {
  return (
    <>
      <img className={css.ipad} src={iPad} alt="ipad" />
    </>
  );
};

export default Carousel;
