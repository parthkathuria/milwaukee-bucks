import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Switch } from "react-router-dom";
import NewElectionForm from "./components/elections/NewElectionForm";
import Home from "./components/Home";
import VoterForm from "./components/Voter/VoterForm";
import { useDispatch, useSelector } from "react-redux";
import Election from "./components/elections/Election";
import { useEffect } from "react";
import { getElections } from "./services/FetchService";

function App() {
  const elections = useSelector((state) => state.appState.elections);
  const dispatch = useDispatch();

  function refreshElections() {
    dispatch(getElections());
  }
  useEffect(refreshElections, []);

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
            <LinkContainer to="/register/:id">
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
              <Home elections={elections} refreshElections={refreshElections} />
            </Route>
            <Route exact path="/register/:id">
              <VoterForm />
            </Route>
            <Route exact path="/create-election">
              <NewElectionForm />
            </Route>
            <Route exact path="/election/:electionId">
              <Election />
            </Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
