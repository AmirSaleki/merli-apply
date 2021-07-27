import React from "react";
import css from "./Services.module.css";
import Card from "../UI/Card/Card.component";

const About = () => {
  return (
    <div className={css.container} id="services">
      <h1 style={{ color: "white" }}>خدمات ما</h1>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <img
              src="https://www.insidehighered.com/sites/default/server_files/media/image_15.png"
              alt="pp"
            />
          </div>
          <div className={css.cardText}>
            <h3>اخذ پذیرش دانشگاه و خوابگاه</h3>
            <p>ارائه تمامی خدمات صفر تا صد دریافت پذیرش دانشگاه</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <img
              src="https://islamabad.embaixadaportugal.mne.gov.pt/images/notary-1000x600.jpg"
              alt="pp"
            />
          </div>
          <div className={css.cardText}>
            <h3>راهنمای امور مربوط به سفارت</h3>
            <p>راهنمای کامل جهت تکمیل پرونده سفارت تا دریافت بدون مشکل ویزا</p>
          </div>
        </div>
      </Card>
      <Card>
        <div className={css.cardContainer}>
          <div className={css.cardImage}>
            <img
              src="https://www.studying-in-germany.org/wp-content/uploads/2018/08/learn-german-language-with-online-courses.jpg"
              alt="pp"
            />
          </div>
          <div className={css.cardText}>
            <h3>آموزش زبان آلمانی</h3>
            <p>تدریس تخصصی زبان آلمانی از مبتدی تا پیشرفته</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
