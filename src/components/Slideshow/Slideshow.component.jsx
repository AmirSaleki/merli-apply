import React from "react";
import css from "./Slideshow.module.css";
import Carousel from "../UI/Carousel/Carousel.component";
import { Link } from "react-router-dom";

const Slideshow = () => {
  return (
    <>
      <div className={css.banner} id="home">
        <div className={css.intro}>
          <h1>اخذ پذیرش دانشگاه های آلمان</h1>
          <p>
            روندی جذاب ساده کارآمد و سریع جهت اخذ پذیرش رشته های مختلف تحصیلی در
            دانشگاه های آلمان <b>با ما</b> را تجربه کنید
          </p>
          <p>
            جهت اطلاعات بیشتر{" "}
            <Link to="/articles">به قسمت مقالات مراجعه فرمایید</Link>
          </p>
        </div>
        <div className={css.carousel}>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Slideshow;
