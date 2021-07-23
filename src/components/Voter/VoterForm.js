import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import data from "../../db.json";
import { useParams } from "react-router";
import { createAddNewVoter } from "../../actions.js/index";
import { createVoter, getVoters, editVoter } from "../../services/FetchService";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

const VoterForm = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  const addingNewVoter = useSelector((state) => state.appState.addNewVoter);
  const voters = useSelector((state) => state.appState.voters);

  const [voter, setVoter] = useState(
    id !== ":id"
      ? voters.find((voter) => voter.id === parseInt(id))
      : {
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          birthDate: "",
          email: "",
          phone: "",
        }
  );

  let addNewVoter = (voter) => (dispatch, getState) => {
    let voterAction = id !== ":id" ? editVoter : createVoter;
    dispatch(createAddNewVoter(true));
    voterAction(voter)
      .then(() => dispatch(createAddNewVoter(false)))
      .then(() => dispatch(getVoters()))
      .then(() => dispatch(push("/")));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>voter form</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={voter.email}
            onChange={(e) => handleChange(e)}
          />

          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={voter.firstName}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={voter.lastName}
            onChange={(e) => handleChange(e)}
          />
          {voter.lastName}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={voter.address}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={voter.city}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            value={voter.birthDate}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            name="phone"
            value={voter.phone}
            onChange={(e) => handleChange(e)}
          />
          {voter.phone}
        </Form.Group>

        <Button
          variant="success"
          onClick={!addingNewVoter ? () => dispatch(addNewVoter(voter)) : null}
          disabled={addingNewVoter}
        >
          {addingNewVoter ? "Saving..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default VoterForm;
