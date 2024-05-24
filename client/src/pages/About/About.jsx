import "./About.css";
import { Link } from "react-router-dom";
import effect from "../../img/effect.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Header></Header>
      <section className="about-section">
        <div className="about">
          <div>
            <p className="about-title">O nás</p>
          </div>
          <p className="about-us">
            <strong>Borci z průmyslovky</strong>, každou chvilku vydávají
            novinky, nejčastěji z třídy třetího ročníku! Proč? Protože bagr,
            nevim. Vždy, když je aktivní novinka, dozvíte se hned v úvodu.
            Rozhodli jsme se založit novinky, protože nás baví dávat vám
            informace ohledně průběhu na 
            <strong> Střední Průmyslové škole Mladá Boleslav</strong>.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
