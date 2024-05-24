import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateNovelty, getNovelty } from "../../models/Novelty";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import "./NoveltyUpdateForm.css";

export default function NoveltyUpdateForm() {
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

  const postForm = async () => {
    const novelty = await updateNovelty(id, formData);
    if (novelty.status === 200) {
      navigate(`/novelty/${id}`);
    } else {
      setInfo(novelty.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, img: reader.result });
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  useEffect(() => {
    load();
  }, []);

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
      <section className="noveltyUpdate-section">
        <div className="noveltyUpdate">
          <div>
            <p className="noveltyUpdate-title">Upravení Novinky</p>
          </div>
          <p className="noveltyUpdate-us">
            <p>
              <strong>ID: </strong>
              {id}
            </p>
            <form>
              <input
                type="text"
                defaultValue={novelty.name}
                name="name"
                required
                placeholder="Enter novelty name"
                onChange={(e) => handleChange(e)}
              />
              <textarea
                type="text"
                defaultValue={novelty.content}
                name="content"
                required
                placeholder="Enter content"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                defaultValue={novelty.author}
                name="author"
                required
                placeholder="Enter author"
                onChange={(e) => handleChange(e)}
              />
              <input
                accept="image/*"
                type="file"
                name="img"
                required
                onChange={handleImageChange}
              />
              <button className="big-btn" onClick={handlePost}>Upravit Novinku</button>
            </form>
          </p>
        </div>
      </section>
      <div className="go-back-btn-place">
        <BackButton></BackButton>
      </div>
      <Footer></Footer>
    </>
  );
}
