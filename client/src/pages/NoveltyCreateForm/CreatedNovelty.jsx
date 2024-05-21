import { Link, useParams } from "react-router-dom";

export default function CreatedNovelty() {
  const { id } = useParams();  

  return (
    <>
      <p>Created novelty: { id }</p>
      <Link to={`/novelty/${id}`}>
        <p>View novelty</p>
      </Link>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
