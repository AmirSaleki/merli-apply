import React, { useState } from "react";
import logo from "../../logo.svg";
import Carousel from "../UI/Carousel/Carousel.component";
import css from "./Header.module.css";

const Header = (props) => {
  const [hamClick, setHamClick] = useState(false);
  const hamMenuClickHandler = () => {
    setHamClick(!hamClick);
  };
  return (
    <>
      <div className={css.container}>
        <i
          className={`fas fa-bars ${css.hamIcon}`}
          onClick={hamMenuClickHandler}
        ></i>

        <div className={css.links}>
          <a href="/" className={css.homeLink}>
            خانه
          </a>
          <a href="/">فرم ارزیابی</a>
          <a href="/">درباره ما</a>
          <a href="/">تماس با ما</a>
        </div>
        <div className={css.logo}>
          <img src={logo} alt="Merli-Apply-Logo" />
          <h4>Merli Apply</h4>
        </div>
      </div>
      {hamClick && (
        <div className={css.hamMenu}>
          <a href="/">خانه</a>
          <a href="/">فرم ارزیابی</a>
          <a href="/">درباره ما</a>
          <a href="/">تماس با ما</a>
        </div>
      )}
      <div className={css.banner}>
        <div className={css.intro}>
          <h1>اخذ پذیرش دانشگاه های آلمان</h1>
          <p>
            روندی جذاب ساده و سریع اخذ پذیرش رشته های مختلف تحصیلی در دانشگاه
            های آلمان <b>با ما</b> را تجربه کنید
          </p>
        </div>
        <div className={css.carousel}>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Header;
