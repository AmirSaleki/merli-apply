import React from "react";
import css from "./Article.module.css";
import Card from "../UI/Card/Card.component";
import articleData from "./ArticleData";
import bannerImage from "../../resources/images/articles/banner.jpg";

const Article = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.cardFrame}>
          <Card>
            <div className={css.cardContainer}>
              <div className={css.menu}>
                <ul>
                  <li>
                    <a
                      href="/"
                      style={{ color: "var(--textBlue)", fontWeight: "800" }}
                    >
                      بازگشت به صفحه اول
                    </a>
                  </li>
                  {articleData.map((content) => (
                    <li key={content.id}>
                      <a className={css.navMenuLinks} href={`#${content.id}`}>
                        {content.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css.content}>
                <img src={bannerImage} alt="articleBanner" />
                <div className={css.contentText}>
                  {articleData.map((content) => (
                    <div key={content.id}>
                      <div id={content.id} className={css.spanFiller} />
                      <h3>{content.title}</h3>
                      <p>{content.content}</p>
                      {content.list && (
                        <ul>
                          {content.list.map((item) => (
                            <li key={content.list.indexOf(item)}>{item}</li>
                          ))}
                        </ul>
                      )}
                      {content.img && (
                        <img
                          className={css.contentImage}
                          src={content.img}
                          alt={content.title}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Article;
