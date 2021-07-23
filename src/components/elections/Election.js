import { Button, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { store } from "../..";

export default function Election() {
  let { electionId } = useParams();
  const state = store.getState().appState;
  let election;
  if (electionId) {
    election = state.elections.find((e) => e.id === parseInt(electionId));
  }

  return (
    <>
      {election ? (
        <>
          <h3>{election.title}</h3>
          <hr />
          <Table>
            <tbody>
              {election.questions.map((question) => {
                return (
                  <tr>
                    <td>{question.title}</td>
                    <td>
                      <Button variant="success" size="sm">
                        Vote
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <h3>Invalid Election Id: {electionId}</h3>
      )}
    </>
  );
}
