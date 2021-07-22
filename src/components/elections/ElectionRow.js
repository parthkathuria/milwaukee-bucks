import { Button } from "react-bootstrap";

function ElectionRow({ election }) {
  return (
    <tr>
      <td>{election.id}</td>
      <td>{election.title}</td>
      <td>{election.createdAt}</td>
      <td>
        <Button variant="success" size="sm">
          Vote
        </Button>
      </td>
    </tr>
  );
}

export default ElectionRow;
