import "./../pages/MainPage/MainPage.css"
import newspaper_image from "./../img/newspaper_logo.png";
import spsmb_logo from "./../img/spsmb_logo.png";

export default function Header(){
    return (
        <>
          <section className="header">
            <h1 className="main-name">Novinky <span>SPS</span>MB</h1>
            <p className="main-description">Nejnovější novinky Střední průmyslové školy Mladá Boleslav</p>
            <img src={newspaper_image} alt="newspaper" className="newspaper-logo" draggable="false" />
            <nav className="navigator">
              <p>Novinky</p>
              <p>O nás</p>
              <p>Kontakt</p>
            </nav>
            <img className="spsmb-logo" src={spsmb_logo} alt="spsmb-logo" draggable="false" />
          </section>
        </>
    )
}

