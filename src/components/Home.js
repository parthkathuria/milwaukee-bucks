import VoterList from "./Voter/VoterList";
import { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import ElectionList from "./elections/ElectionList";
import { useSelector } from "react-redux";
import { IS_FETCHING_VOTERS } from "../actions.js";

function Home({ elections, voters, refreshElections, refreshVoters }) {
  const [showVoters, setShowVoters] = useState(false);
  const isFetchingElection = useSelector(
    (state) => state.appState.isFetchingElection
  );

  const isFetchingVoters = useSelector(
    (state) => state.appState.isFetchingVoters
  );

  return (
    <>
      <h2>Registered Voters</h2>
      <Button
        variant="success"
        disabled={isFetchingVoters}
        onClick={isFetchingVoters || refreshVoters}
        size="sm"
      >
        {isFetchingVoters ? "Refreshing..." : "Refresh"}
      </Button>
      {voters.length ? <VoterList voters={voters} /> : null}
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
