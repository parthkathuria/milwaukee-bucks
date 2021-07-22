import ElectionList from "./elections/ElectionList";

function Home({ elections }) {
  return (
    <>
      <h2>Registered Voters</h2>
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
