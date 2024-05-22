import { Link } from "react-router-dom";
import NoveltyLink from "./NoveltyLink";
import { useState, useEffect } from "react";
import { getNovelties } from "../../models/Novelty";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NoveltyList() {
  const [novelties, setNovelties] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const [noNews, setNoNews] = useState(true);

  useEffect(() => {
    const fetchNovelties = async () => {
      const response = await getNovelties();
      if (response.status === 200) {
        const latestNovelties = response.payload;
        setNovelties(latestNovelties.reverse());
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
          <p>
            {novelty.content.substring(0, 400)}
            {novelty.content.length > 400 ? "..." : ""}
          </p>
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

      <section className="noveltyList-section">
        <div className="about">
          <div>
            <p className="noveltyList-title">Seznam Novinek:</p>
          </div>
          <div id="noveltyListContent">
            {!noNews && <div className="novelties">{noveltiesContent}</div>}
            {noNews && <p className="no-news">Žádné novinky ☹️</p>}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
