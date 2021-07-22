import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Home from "./components/Home";
import { Row } from "react-bootstrap";

function App() {
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
              <Home />
            </Route>
            <Route exact path="/register">
              <h2>Register to Vote</h2>
              <hr />
            </Route>
            <Route>
              <h2>Create Election</h2>
              <hr />
            </Route>
          </Switch>
        </Row>
      </Container>
    </div>
  );
}

export default App;
