import React, { useState } from "react";
import css from "./Forum.module.css";

const Forum = () => {
  const [showForum, setShowForum] = useState(false);
  const showForumHandler = (e) => {
    const email = e.target.value;
    if (email !== "undefined") {
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (pattern.test(email)) {
        setShowForum(true);
      }
    }
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
              onChange={showForumHandler}
              type="email"
              placeholder="ایمیل"
              size="30"
              required
            />
          </div>
        </div>
        <form
          action="mailto:amir.saleki8@gmail.com"
          method="POST"
          encType="multipart/form-data"
          name="emailForm"
        >
          <div className={showForum ? css.forum : css.hideForum}>
            <div className={css.leftList}>
              <input type="text" placeholder="نام و نام خانوادگی" />
              <input type="number" placeholder="سن" step="1" />
              <input type="text" placeholder="میزان تحصیلات فعلی" />
              <input type="text" placeholder="رشته تحصیلی" />
            </div>
            <div className={css.rightList}>
              <input
                type="number"
                placeholder="معدل آخرین مدرک تحصیلی"
                step="0.1"
              />
              <input
                type="number"
                placeholder="میزان سابقه کار مرتبط با رشته تحصیلی"
                step="1"
              />
              <input type="text" placeholder="مدرک زبان خارجی" />
              <button type="submit">ارسال</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forum;
