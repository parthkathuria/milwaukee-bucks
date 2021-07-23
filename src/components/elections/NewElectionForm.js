import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Table, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { createElections, getElections } from "../../services/FetchService";
import { useDispatch, useSelector } from "react-redux";
import { createAddNewElection } from "../../actions.js";
import { push } from "connected-react-router";

function NewElectionForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const addingNewElection = useSelector(
    (state) => state.appState.addingNewElection
  );
  const [electionForm, setElectionForm] = useState({
    title: "",
    questions: [],
  });
  const [electionQuestion, setElectionQuestion] = useState("");
  const [err, setErr] = useState("");

  function handleFormChange(event) {
    setElectionForm({
      ...electionForm,
      [event.target.name]: event.target.value,
    });
  }

  function handleQuestionChange(event) {
    setElectionQuestion(event.target.value);
  }

  function addQuestion() {
    if (electionForm.questions.indexOf(electionQuestion) > -1) {
      setErr("Question already in the list.");
    } else {
      setElectionForm({
        ...electionForm,
        questions: [...electionForm.questions, electionQuestion],
      });
      setElectionQuestion("");
      setErr("");
    }
  }

  function deleteQuestion(question) {
    let idx = electionForm.questions.findIndex((q) => q === question);
    electionForm.questions.splice(idx, 1);
    setElectionForm({
      ...electionForm,
      questions: [...electionForm.questions],
    });
  }

  let addNewElection = (title, questions) => (dispatch, getState) => {
    dispatch(createAddNewElection(true));
    createElections(title, questions)
      .then(() => dispatch(createAddNewElection(false)))
      .then(() => dispatch(getElections()))
      .then(() => dispatch(push("/")));
  };

  return (
    <>
      <h2>Create Election</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="electionForm.title">
          <Form.Label>Election Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={electionForm.title}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="electionQuestion">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            value={electionQuestion}
            onChange={handleQuestionChange}
            placeholder="Enter your question here."
          />
        </Form.Group>
        {electionQuestion ? (
          <Button variant="success" onClick={() => addQuestion()}>
            Add Question to List
          </Button>
        ) : null}
        <br />
        <br />
        {err && <Alert variant="danger">{err}</Alert>}
        <hr />
        <h3>Questions in the List</h3>
        <Table>
          <tbody>
            {electionForm.questions.map((question) => {
              return (
                <tr key={question}>
                  <td>{question}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => deleteQuestion(question)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <hr />
        {electionForm.title && electionForm.questions.length ? (
          <div className="d-grid gap-2">
            <Button
              variant="success"
              onClick={
                !addingNewElection
                  ? () =>
                      dispatch(
                        addNewElection(
                          electionForm.title,
                          electionForm.questions
                        )
                      )
                  : null
              }
              disabled={addingNewElection}
            >
              {addingNewElection ? "Saving..." : "Save"}
            </Button>
          </div>
        ) : null}
      </Form>
    </>
  );
}

export default NewElectionForm;
