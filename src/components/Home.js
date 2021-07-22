import VoterList from "./Voter/VoterList";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ElectionList from "./elections/ElectionList";

function Home({ elections }) {
  const [showVoters, setShowVoters] = useState(false);
  return (
    <>
      <h2>Registered Voters</h2>
      <Button
        onClick={() => setShowVoters(!showVoters)}
        variant="success"
        style={{ width: "20rem" }}
      >
        {" "}
        Show Voters{" "}
      </Button>
      {showVoters && <VoterList />}
      <hr />
      <h2>Elections</h2>
      {elections.length ? (
        <ElectionList elections={elections} />
      ) : (
        <p>
          No Elections created yet. Click <b>Create Elections</b> link to create
          one.
        </p>
      )}
    </>
  );
}

export default Home;
