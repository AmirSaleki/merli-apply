import React, { useState } from "react";
import css from "./Forum.module.css";
import emailjs from "emailjs-com";

const Forum = () => {
  const [showForum, setShowForum] = useState(false);
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const showForumHandler = (e) => {
    setUserEmail(e.target.value);
    if (userEmail !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (pattern.test(userEmail)) {
        setShowForum(true);
        setUserEmail(e.target.value);
      }
    }
  };
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        "service_qavlhho",
        "template_n8g7sy5",
        e.target,
        "user_n5002173eUYll5nRzHxmv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShowForum(false);
    setShowConfirmMessage(true);
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.validation}>
          <div>
            <h1 className={showForum ? css.hideTitle : css.title}>
              جهت تکمیل فرم ارزیابی رایگان لطفا ایمیل خود را وارد فرمایید
            </h1>
          </div>
          <div>
            <input
              className={showForum ? css.hideTitle : css.title}
              onChange={showForumHandler}
              type="email"
              placeholder="ایمیل"
              size="30"
              required
            />
          </div>
        </div>
        <form onSubmit={submitHandler}>
          <div className={showForum ? css.forum : css.hideForum}>
            <div className={css.leftList}>
              <input type="text" placeholder="نام و نام خانوادگی" name="name" />
              <input type="number" placeholder="سن" step="1" name="age" />
              <input
                type="text"
                placeholder="میزان تحصیلات فعلی"
                name="latest-degree"
              />
              <input type="text" placeholder="رشته تحصیلی" name="major" />
              <input
                type="number"
                placeholder="معدل آخرین مدرک تحصیلی"
                step="0.1"
                name="latest-note"
              />
            </div>
            <div className={css.rightList}>
              <input
                type="number"
                placeholder="میزان سابقه کار مرتبط با رشته تحصیلی"
                step="1"
                name="years-of-experience"
              />
              <input
                type="text"
                placeholder="مدرک زبان خارجی"
                name="foreign-language"
              />
              <input
                type="email"
                placeholder="ایمیل"
                name="email"
                value={userEmail}
              />
              <input type="phone" placeholder="شماره تماس" name="phone" />
              <button type="submit">ارسال</button>
            </div>
          </div>
        </form>
        {showConfirmMessage &&
          alert(
            "درخواست شما با موفقیت ثبت شد و پس از بررسی کارشناسان ما در اولین فرصت با شما تماس خواهد گرفت"
          )}
        ;
      </div>
    </>
  );
};

export default Forum;
