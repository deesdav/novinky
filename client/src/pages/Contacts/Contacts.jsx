import "./Contacts.css";
import { Link } from "react-router-dom";
import news_icon from "../../img/news_icon.png";
import effect from "../../img/effect.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contacts() {
  return (
    <>
      <Header></Header>

      <section className="container">
        <div className="recent-novelties">
          <div className="recent-title">
            <p className="last-blogs-title">Kontakty</p>
            <img
              className="news-icon"
              src={news_icon}
              alt="news_icon"
              draggable="false"
            />
          </div>
          <div className="novelties">djogasg</div>
        </div>


      </section>

      <Footer></Footer>
    </>
  );
}
