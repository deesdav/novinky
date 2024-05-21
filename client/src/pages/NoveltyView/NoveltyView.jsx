import { Link, useParams, useNavigate } from "react-router-dom";
import { getNovelty, deleteNovelty } from "../../models/Novelty";
import { useState, useEffect } from "react";

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
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

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
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Novelty not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Novelty is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Novelty view</h1>
      <p>{id}</p>
      <p>{novelty.name}</p>
      <p>{novelty.content}</p>
      <p>{novelty.author}</p>
      <p>{novelty.date}</p>
      <img src={novelty.img} alt="Novelty" />
      <form>
        <input type="text" placeholder={novelty.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatenovelty/${id}`}>
        <p>Update novelty</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
