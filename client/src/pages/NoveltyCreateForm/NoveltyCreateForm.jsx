import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createNovelty } from "../../models/Novelty";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import "./NoveltyCreateForm.css";

export default function NoveltyCreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    author: "", 
    date: new Date().toISOString(),
    img: null,
  });

  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const postForm = async () => {
    const novelty = await createNovelty(formData);
    if (novelty.status === 201) {
      redirectToSuccessPage(novelty.payload._id);
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

  const redirectToSuccessPage = (id) => {
    return navigate(`/novelty/${id}`);
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

  console.log(formData);

  return (
    <>
      <Header></Header>
      <section className="noveltyCreate-section">
        <div className="noveltyCreate">
          <div>
            <p className="noveltyCreate-title">Vytvoření Novinky</p>
          </div>
          <p className="noveltyCreate-us">
            <form>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter novelty name"
                onChange={(e) => handleChange(e)}
              />
              <textarea
                type="text"
                name="content"
                required
                placeholder="Enter content"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
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
              <button className="big-btn" onClick={handlePost}>Vytvořit Novinku</button>
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
