import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import data from "../../db.json";
import { useParams } from "react-router";

const VoterForm = ({ editableVoterId }) => {
  let { id } = useParams();

  let initVoter = id
    ? data.voters[parseInt(id) - 1]
    : {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        birthDate: "",
        email: "",
        phone: "",
      };

  const [voter, setVoter] = useState(initVoter);

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

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default VoterForm;
