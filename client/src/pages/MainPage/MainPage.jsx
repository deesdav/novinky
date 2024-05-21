import "./MainPage.css";
import { getNovelties } from "../../models/Novelty";
import { Link } from "react-router-dom";
import NoveltyLink from "../NoveltyList/NoveltyLink";
import { useState, useEffect } from "react";
import news_icon from "../../img/news_icon.png";
import effect from "../../img/effect.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MainPage() {
  const [novelties, setNovelties] = useState([]);
  const [noNews, setNoNews] = useState(true);

  useEffect(() => {
    const fetchNovelties = async () => {
      const response = await getNovelties();
      if (response.status === 200) {
        const latestNovelties = response.payload;
        setNovelties(latestNovelties.reverse().slice(0, 3));
        setNoNews(latestNovelties.length === 0);
      } else {
        console.error("Failed to fetch novelties:", response.msg);
      }
    };

    fetchNovelties();
  }, []);

  let noveltiesContent;
  if (!noNews) {
    noveltiesContent = novelties.map((novelty, index) => (
      <div key={index} className="one-novelty">
        <h2>{novelty.name}</h2>
        <div className="author-and-date">
          <p>Autor: {novelty.author}</p>
          <p>Datum: {novelty.date}</p>
        </div>
        <div className="blog-content">
          <p>{novelty.content.substring(0, 400)}{novelty.content.length > 400 ? "..." : ""}</p>
          <div className="blog-img">
            <img src={novelty.img} alt="Novelty" />
          </div>
        </div>
        <NoveltyLink _id={novelty._id} name={novelty.name}></NoveltyLink>
      </div>
    ));
  }

  return (
    <>
      <Header></Header>

      <section className="container">
        {!noNews && (
          <div className="recent-novelties">
            <div className="recent-title">
              <p className="last-blogs-title">Poslední novinky</p>
              <img className="news-icon" src={news_icon} alt="news_icon" draggable="false" />
              <Link to={"/novelties"} className="no-underline btn-all-novelties">
                <p>Všechny novinky</p>
              </Link>
            </div>
            <div className="novelties">
              {noveltiesContent}
            </div>
          </div>
        )}
        {noNews && (
          <p className="no-news">Žádné novinky ☹️</p>
        )}
        
        {!noNews &&(
          <img className="effect" src={effect} alt="effect" />
        )}
        
        <div className="black-section">
          <div>
            <p className="create-title">Chcete napsat novinku?</p>
            <p className="create-decription">Můžete, stačí kliknout na tlačítko</p>
          </div>
          <Link to={"/createnovelty"} className="no-underline create-btn">
            <p>Vytvořit článek</p>
          </Link>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
