import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";

function NewElectionForm({ addNewElection }) {
  const [electionForm, setElectionForm] = useState({
    title: "",
    questions: [],
  });
  const [electionQuestion, setElectionQuestion] = useState("");

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
    setElectionForm({
      ...electionForm,
      questions: [...electionForm.questions, electionQuestion],
    });
    setElectionQuestion("");
  }

  function deleteQuestion(question) {
    let idx = electionForm.questions.findIndex((q) => q === question);
    electionForm.questions.splice(idx, 1);
    setElectionForm({
      ...electionForm,
      questions: [...electionForm.questions],
    });
  }

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
              onClick={() =>
                addNewElection(electionForm.title, electionForm.questions)
              }
            >
              Save
            </Button>
          </div>
        ) : null}
      </Form>
    </>
  );
}

export default NewElectionForm;
