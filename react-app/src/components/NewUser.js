import { useParams } from "react-router-dom";

export const NewUser = () => {
  const { id } = useParams();

  return <h2>new user {id}</h2>;
};
