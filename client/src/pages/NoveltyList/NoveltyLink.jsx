import "./NoveltyLink.css";
import { Link, useLocation } from "react-router-dom";

export default function NoveltyLink(props) {
  return (
    <Link
      to={`/novelty/${props._id}`}
      className="no-underline btn-whole-novelty"
    >
      <p>Přečíst celý článek</p>
    </Link>
  );
}
