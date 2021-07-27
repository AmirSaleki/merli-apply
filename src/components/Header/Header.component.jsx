import React, { useState } from "react";
import logo from "../../logo.svg";
import Carousel from "../UI/Carousel/Carousel.component";
import css from "./Header.module.css";
import { Link } from "react-scroll";

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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            className={css.homeLink}
          >
            خانه
          </Link>
          <Link to="services" spy={true} smooth={true}>
            خدمات
          </Link>
          <Link to="forum" spy={true} smooth={true}>
            فرم ارزیابی
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            تماس با ما
          </Link>
        </div>
        <div className={css.logo}>
          <img src={logo} alt="Merli-Apply-Logo" />
          <h4>Merli Apply</h4>
        </div>
        {hamClick && (
          <div className={css.hamMenu}>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              className={css.homeLink}
            >
              خانه
            </Link>
            <Link to="services" spy={true} smooth={true}>
              خدمات
            </Link>
            <Link to="forum" spy={true} smooth={true}>
              فرم ارزیابی
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              تماس با ما
            </Link>
          </div>
        )}
      </div>
      <div className={css.banner} id="home">
        <div className={css.intro}>
          <h1>اخذ پذیرش دانشگاه های آلمان</h1>
          <p>
            روندی جذاب ساده کارآمد و سریع جهت اخذ پذیرش رشته های مختلف تحصیلی در
            دانشگاه های آلمان <b>با ما</b> را تجربه کنید
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
