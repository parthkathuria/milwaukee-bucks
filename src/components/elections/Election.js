import { Button, Table, Form, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { store } from "../..";
import { useState, useEffect } from "react";
import {
  getVotersByEmail,
  getElections,
  updateElections,
} from "../../services/FetchService";
import { useDispatch } from "react-redux";

export default function Election() {
  let { electionId } = useParams();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [voterState, setVoterState] = useState("");
  const [result, setResult] = useState([]);
  const state = store.getState().appState;
  const dispatch = useDispatch();
  let election;
  if (electionId) {
    election = state.elections.find((e) => e.id === parseInt(electionId));
  }

  function refreshElections() {
    dispatch(getElections());
  }
  useEffect(refreshElections, [dispatch]);

  function checkVoterState() {
    if (election.voterList.filter((v) => v === email).length > 0) {
      setVoterState("voted");
    } else {
      getVotersByEmail(email)
        .then((response) => {
          if (response.length === 1) {
            setVoterState("valid");
            setResult(Array(election.questions.length).fill(0));
          } else {
            setVoterState("notExist");
          }
        })
        .catch((error) => console.log(error));
    }
  }

  function submitVote() {
    updateElections(
      electionId,
      election.createdAt,
      election.title,
      election.questions,
      election.voterList,
      result,
      email
    )
      .then((response) => {
        console.log(response);
        history.push("/success");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      {voterState !== "valid" && (
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="success"
            type="button"
            className="mb-2"
            onClick={checkVoterState}
          >
            Verify
          </Button>
        </Form>
      )}

      {voterState === "voted" && (
        <Alert variant="warning">You have already voted!</Alert>
      )}
      {voterState === "notExist" && (
        <Alert variant="warning">Please register first!</Alert>
      )}
      {voterState === "valid" && (
        <Alert variant="success" className="mt-3">
          Success!
        </Alert>
      )}

      {election ? (
        <>
          <h3>{election.title}</h3>
          <hr />
          <Table>
            <tbody>
              {election.questions.map((question, index) => {
                return (
                  <tr key={question.title}>
                    <td>{question.title}</td>
                    <td>
                      {voterState === "valid" && (
                        <Form.Check
                          aria-label="option 1"
                          checked={result[index]}
                          onChange={() => {
                            let newResult = [...result];
                            newResult[index] = 1 - result[index];
                            setResult(newResult);
                          }}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {voterState === "valid" && (
            <Button variant="success" onClick={submitVote} type="button">
              Submit
            </Button>
          )}
        </>
      ) : (
        <h3>Invalid Election Id: {electionId}</h3>
      )}
    </>
  );
}
