import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ElectionList from "./elections/ElectionList";

function Home({ elections, refreshElections }) {
  const isFetchingElection = useSelector((state) => state.isFetchingElection);
  return (
    <>
      <h3>Registered Voters</h3>
      <hr />
      <h3>Elections</h3>
      <Button
        variant="outline-success"
        size="sm"
        disabled={isFetchingElection}
        onClick={!isFetchingElection ? refreshElections : null}
      >
        {isFetchingElection ? "Refreshing..." : "Refresh"}
      </Button>
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
