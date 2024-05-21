import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createNovelty } from "../../models/Novelty";

export default function NoveltyCreateForm() {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    author: "",
    date: new Date().toISOString(),
    img: null
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
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/creatednovelty/${id}`)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, img: reader.result });
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }

  console.log(formData)

  return (
    <>
      <h1>Novelty create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter novelty name" onChange={handleChange}/>
        <input type="text" name="content" required placeholder="Enter content" onChange={handleChange}/>
        <input type="text" name="author" required placeholder="Enter author" onChange={handleChange}/>
        <input accept="image/*" type="file" name="img" required onChange={handleImageChange}/>
        <button onClick={handlePost}>
          Create novelty
        </button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
