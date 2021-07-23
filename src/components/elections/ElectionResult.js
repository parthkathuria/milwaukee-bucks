import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import { getElections } from "../../services/FetchService";
import { useDispatch} from "react-redux";
import { store } from "../..";
import { useEffect } from "react";

function ElectionResult() {
let { electionId } = useParams();
const dispatch = useDispatch();
const state = store.getState().appState;
let election;
if (electionId) {
    election = state.elections.find((e) => e.id === parseInt(electionId));
}

function refreshElections() {
    dispatch(getElections());
}
useEffect(refreshElections, []);

  return (
    <>
    {election ? (
        <>
          <h3 className="mt-4 mb-4">{election.title}</h3>
          <hr />
          <Table>
      <thead>
        <tr>
          <th>questions</th>
          <th>Yes</th>
          <th>No</th>
        </tr>
      </thead>
      <tbody>
              {election.questions.map((question) => {
                return (
                  <tr>
                    <td>{question.title}</td>
                    <td>{question.yes}</td>
                    <td>{question.no}</td>
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

export default ElectionResult;