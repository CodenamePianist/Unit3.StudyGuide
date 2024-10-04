import { useState } from "react";
import { useAddPartyMutation } from "../store/partySlice";
import { useNavigate } from "react-router-dom";

export default function AddParty() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const [addParty, { isLoading }] = useAddPartyMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function postParty(event) {
    event.preventDefault();

    const isoDate = new Date(date).toISOString();

    try {
      const party = await addParty({
        name,
        location,
        description,
        date: isoDate,
      }).unwrap();
      navigate(`/parties/${party.id}`);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form onSubmit={postParty}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <button>Add Party</button>
        {isLoading && <output>Sending party to API...</output>}
        {error && <output>{error}</output>}
      </label>
    </form>
  );
}
