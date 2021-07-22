import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ElectionRow({ election }) {
  let url = `/election/${election.id}`;

  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.title}</td>
      <td>{election.createdAt}</td>
      <td>
        <LinkContainer to={url}>
          <Button variant="success" size="sm">
            Vote
          </Button>
        </LinkContainer>
      </td>
    </tr>
  );
}

export default ElectionRow;
