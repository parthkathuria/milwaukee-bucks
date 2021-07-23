import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function ElectionRow({ election }) {
  let urlVote = `/election/${election.id}`;
  let urlResult = `/election-result/${election.id}`;

  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.title}</td>
      <td>{election.createdAt}</td>
      <td>
        <LinkContainer to={urlVote}>
          <Button variant="success" size="sm" className="me-2">
            Vote
          </Button>
        </LinkContainer>
        <LinkContainer to={urlResult}>
          <Button variant="success" size="sm">
            View Result
          </Button>
        </LinkContainer>
      </td>
    </tr>
  );
}

export default ElectionRow;
