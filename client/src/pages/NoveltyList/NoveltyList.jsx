import { Link } from "react-router-dom";
import NoveltyLink from "./NoveltyLink";
import { useState, useEffect } from "react";
import { getNovelties } from "../../models/Novelty";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NoveltyList() {
  const [novelties, setNovelties] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getNovelties();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setNovelties(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Novelties not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Novelties are loading...</p>
      </>
    )
  }

  return (
    <>
    <Header></Header>
      <h1>Novelty list</h1>
      {
        novelties.map((novelty, index) => (
          <NoveltyLink key={index} {...novelty} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
      <Footer></Footer>
    </>
  );
}
