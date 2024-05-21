import "./../pages/MainPage/MainPage.css"
import newspaper_image from "./../img/newspaper_logo.png";
import spsmb_logo from "./../img/spsmb_logo.png";
import { Link } from "react-router-dom";
 
export default function Header(){
    return (
        <>
          <section className="header">
            <h1 className="main-name">Novinky <span>SPS</span>MB</h1>
            <p className="main-description">Nejnovější novinky Střední průmyslové školy Mladá Boleslav</p>
            <img src={newspaper_image} alt="newspaper" className="newspaper-logo" draggable="false" />
            <nav className="navigator">
            <Link to={"/novelties"} className="no-underline">
                <p>Novinky</p>
            </Link>
            <Link to={"/about"} className="no-underline">
                <p>O nás</p>
            </Link>
            <Link to={"/contacts"} className="no-underline">
                <p>Kontakt</p>
            </Link>
            </nav>
            <Link to={"/"} className="no-underline">
                <img className="spsmb-logo" src={spsmb_logo} alt="spsmb-logo" draggable="false" />
            </Link>
          </section>
        </>
    )
}