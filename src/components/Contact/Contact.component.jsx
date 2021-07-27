import React from "react";
import css from "./Contact.module.css";
import Card from "../UI/Card/Card.component";
import profilePicture from "../../resources/images/Profile.jpg";

const Footer = () => {
  return (
    <>
      <div className={css.background} id="contact">
        <div className={css.cardSize}>
          <Card>
            <div className={css.container}>
              <div className={css.profile}>
                <img src={profilePicture} alt="profilepicture" />
              </div>
              <div className={css.info}>
                <h2>علیرضا سالکی</h2>
                <p>
                  مدرس زبان آلمانی با سابقه ۶ سال تدریس و سکونت در آلمان همراهی
                  مطمئن جهت یاری تمامی علاقه مندهای تحصیل در آلمان
                </p>
                <div className={css.contactDetails}>
                  <p>Email: info@merli-apply.com</p>
                  <p>Tel: 0919xxxxxxx</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Footer;
