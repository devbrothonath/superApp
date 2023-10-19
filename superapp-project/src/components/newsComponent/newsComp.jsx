import React, { useEffect, useState } from "react";
import snow from "../../assets/snow.png";
import styles from "./newsComp.module.css";
import axios from "axios";

const NewsComp = () => {

  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [text, setText] = useState("");

  const news_url = "https://newsdata.io/api/1/news?apikey=pub_30918e88db94c0872776b8aa6d4eafb45ffc6&image=1&language=en&full_content=0";

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    await axios.get(news_url)
    .then((response) => {
      const newsData = response.data;
      setNews(newsData);
      
      const newsTitle = newsData.results[0].title;
      const newsImg = newsData.results[0].image_url;
      const newsText = newsData.results[0].description;
      
      setTitle(newsTitle)
      setImg(newsImg)
      setText(newsText)
    })
  }
  console.log(text);

  return (
    <div className={styles.newsComp}>
      <div className={styles.textImg}>
        <img src={img} alt="snow" />
        <div className={styles.bigText}>
          <h2>{title}</h2>
          <span>2-20-2023</span>
          <span>07:35 PM</span>
        </div>
      </div>
      <div className={styles.newsText}>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default NewsComp;
