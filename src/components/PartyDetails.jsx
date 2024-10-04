import { useParams } from "react-router-dom";
import { useGetPartyQuery } from "../store/partySlice";

export default function PartyDetails() {
  const { id } = useParams();

  const { data: party, isLoading, error } = useGetPartyQuery(id);

  if (isLoading) {
    return <p>Loading party...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <article>
      {party ? (
        <>
          <h1>
            {party.name} {party.id}
          </h1>
          <p>{party.date}</p>
          <p>{party.description}</p>
          <button>Delete Party</button>
        </>
      ) : (
        <p>There is no selected party.</p>
      )}
    </article>
  );
}
