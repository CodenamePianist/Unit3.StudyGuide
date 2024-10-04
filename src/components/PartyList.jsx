import { Link } from "react-router-dom";
import { useGetPartiesQuery } from "../store/partySlice";

export default function PartyList() {
  const { data: parties = [], isLoading, error } = useGetPartiesQuery();

  if (isLoading) {
    return <p>Loading Parties...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!parties.length) {
    return <p>There are no parties :(.</p>;
  }

  return (
    <ul>
      {parties.map((party) => (
        <li key={party.id}>
          <Link to={`/events/${party.id}`}>{party.name}</Link>
          <p>{party.location}</p>
        </li>
      ))}
    </ul>
  );
}
