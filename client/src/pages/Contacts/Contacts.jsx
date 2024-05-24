import "./Contacts.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contacts() {
  return (
    <>
      <Header></Header>
      <section className="contacts-section">
        <div className="about">
          <div>
            <p className="contacts-title">Kontakty</p>
          </div>
          <p className="contacts-us">
            Kontaktuj nás na <strong>novinkydatabase@gmail.com</strong> a my ti
            odpovíme na veškeré tvé dotazy ohledně <strong>Novinek!</strong>
          </p>
        </div>{" "}
      </section>{" "}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.3487710240915!2d14.902137076934975!3d50.41597318984505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955b8547e8079%3A0xb553032a1eaf8b6d!2zU3TFmWVkbsOtIHByxa9teXNsb3bDoSDFoWtvbGEgTWxhZMOhIEJvbGVzbGF2!5e0!3m2!1scs!2scz!4v1716365405066!5m2!1scs!2scz"
        width="100%"
        height="400"
        loading="eager"
      ></iframe>
      <Footer></Footer>
    </>
  );
}
