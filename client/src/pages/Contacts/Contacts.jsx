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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            doloremque recusandae esse aut quod quos rem nesciunt quae illum
            maiores aspernatur sit tenetur qui deserunt harum tempora voluptas
            molestias cumque!
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
