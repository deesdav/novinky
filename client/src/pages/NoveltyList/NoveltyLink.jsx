import "./NoveltyLink.css";
import { Link, useLocation} from "react-router-dom"

export default function NoveltyLink(props) {

    const location = useLocation();

    if (location.pathname !== "/novelties") { // Pokud se adresa nerovná /novelties a jsi v tom případě na hlavní stránce, <p> vypíše "Přečíst celý článek"
      return (
        <Link to={`/novelty/${props._id}`} className="no-underline btn-whole-novelty">
          <p>Přečíst celý článek</p>
        </Link>
      );
    } else { // Pokud se adresa rovná /novelties, <p> vypíše název článku
      return (
        <Link to={`/novelty/${props._id}`} className="no-underline btn-whole-novelty"> 
          <p>{props.name}</p>
        </Link>
      );
    }
}