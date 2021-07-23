import VoterList from "./Voter/VoterList";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ElectionList from "./elections/ElectionList";
import { useSelector } from "react-redux";

function Home({ elections, refreshElections }) {
  const [showVoters, setShowVoters] = useState(false);
  const isFetchingElection = useSelector(
    (state) => state.appState.isFetchingElection
  );
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
      <Button
        variant="success"
        disabled={isFetchingElection}
        onClick={!isFetchingElection ? refreshElections : null}
        size="sm"
      >
        {isFetchingElection ? "Refreshing..." : "Refresh"}
      </Button>
      {elections.length ? <ElectionList elections={elections} /> : null}
    </>
  );
}

export default Home;
