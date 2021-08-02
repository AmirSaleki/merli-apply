import React, { useState } from "react";
import logo from "../../logo.svg";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamClick, setHamClick] = useState(false);
  const hamMenuClickHandler = () => {
    setHamClick(!hamClick);
  };
  return (
    <>
      <div className={css.container}>
        <i
          className={`fas fa-bars fa-2x ${css.hamIcon}`}
          onClick={hamMenuClickHandler}
        ></i>
        <div className={css.links}>
          <a href="/" className={css.homeLink}>
            خانه
          </a>
          <Link to="/articles">مقالات</Link>
          <a href="#forum">فرم ارزیابی</a>
          <a href="#contact">تماس با ما</a>
        </div>
        <div className={css.logo}>
          <img src={logo} alt="Merli-Apply-Logo" />
          <h3>Merli Apply</h3>
        </div>
      </div>
      {hamClick && (
        <div className={css.hamMenu}>
          <a href="/" className={css.homeLink}>
            خانه
          </a>
          <Link to="/articles">مقالات</Link>
          <a href="#forum">فرم ارزیابی</a>
          <a href="#contact">تماس با ما</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
