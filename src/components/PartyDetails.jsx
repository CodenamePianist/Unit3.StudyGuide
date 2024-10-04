import { useParams } from "react-router-dom";
import { useDeletePartyMutation, useGetPartyQuery } from "../store/partySlice";
import { useNavigate } from "react-router-dom";

export default function PartyDetails() {
  const { id } = useParams();

  const { data: party, isLoading, error } = useGetPartyQuery(id);
  const [deleteParty, { isLoading: isDeleting }] = useDeletePartyMutation();

  const navigate = useNavigate();

  async function removeParty() {
    try {
      await deleteParty(id).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <p>Loading party...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <article>
      <h1>
        {party.name} #{party.id}
      </h1>
      <p>{party.date}</p>
      <p>{party.description}</p>
      <button onClick={removeParty}>Delete Party</button>
      {isDeleting && <p>Deleting...</p>}
    </article>
  );
}
