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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, doloremque recusandae esse aut quod quos rem nesciunt quae illum maiores aspernatur sit tenetur qui deserunt harum tempora voluptas molestias cumque!
              </p>
          </div>
      </section>
      <Footer></Footer>
    </>
  );
}
