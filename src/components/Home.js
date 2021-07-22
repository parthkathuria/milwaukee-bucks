import VoterList from "./Voter/VoterList";
import { useState } from "react";
import { Button } from "react-bootstrap";

//conditional if registered or something show this

function Home() {
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
      <h2>Open Elections</h2>
    </>
  );
}

export default Home;
