import { Link, useParams, useNavigate } from "react-router-dom";
import { getNovelty, deleteNovelty } from "../../models/Novelty";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./NoveltyView.css"

export default function NoveltyView() {
  const { id } = useParams();
  const [novelty, setNovelty] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getNovelty(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setNovelty(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (novelty.name === formData) {
      const data = await deleteNovelty(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  };

  if (isLoaded === null) {
    return (
      <>
        <p>Novelty not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Novelty is loading...</p>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <section className="noveltyView-section">
        <div className="noveltyView">
          <div>
            <p className="noveltyView-title">Novinka</p>
          </div>
          <p className="noveltyView-us">
            <p>
              <strong>ID: </strong>
              {id}
            </p>
            <p>
              <strong> Název: </strong>
              {novelty.name}
            </p>
            <p>
              <strong>Obsah:</strong>
              {novelty.content}
            </p>
            <p>
              <strong> Autor:</strong> {novelty.author}
            </p>
            <p>
              {" "}
              <strong>Datum vytvoření:</strong> {novelty.date}
            </p>
            <img src={novelty.img} alt="Novelty" />
            <form>
              <input
                type="text"
                placeholder={novelty.name}
                onChange={handleChange}
              />
              <button onClick={handleDelete}>Delete</button>
              <p>{info}</p>
            </form>
            <Link className="no-underline" to={`/updatenovelty/${id}`}>
              <p className="bckBtn" >Upravit Novinku</p>
            </Link>
            <Link className="no-underline" to={"/"}>
              <p className="bckBtn">Jít zpět</p>
            </Link>
          </p>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
