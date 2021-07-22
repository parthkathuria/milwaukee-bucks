import { useState } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Switch } from "react-router-dom";
import NewElectionForm from "./components/elections/newElection/NewElectionForm";
import Home from "./components/Home";
import { useHistory } from "react-router-dom";

function getCreateDate() {
  return new Date()
    .toLocaleString()
    .split(/\D/)
    .slice(0, 3)
    .map((num) => num.padStart(2, "0"))
    .join("/");
}

function App() {
  const history = useHistory();
  const [elections, setElections] = useState([]);

  function addNewElection(title, questions) {
    let question_list = questions.map((q, index) => ({
      id: index + 1,
      title: q,
      yes: 0,
      no: 0,
    }));

    let election = {
      id:
        elections.length === 0
          ? 0
          : Math.max(...elections.map((c) => c.id)) + 1,
      createdAt: getCreateDate(),
      title: title,
      questions: question_list,
    };
    setElections([...elections, election]);
    history.push("/");
  }
  return (
    <div>
      <Navbar bg="success" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Milwaukee Bucks
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-election">
              <Nav.Link>Create Election</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Switch>
            <Route exact path="/">
              <Home elections={elections} />
            </Route>
            <Route exact path="/register">
              <h2>Register to Vote</h2>
              <hr />
            </Route>
            <Route>
              <NewElectionForm addNewElection={addNewElection} />
            </Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
