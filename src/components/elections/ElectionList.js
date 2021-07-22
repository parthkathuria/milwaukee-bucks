import Table from "react-bootstrap/Table";
import ElectionRow from "./ElectionRow";

function ElectionList({ elections }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {elections.map((election) => {
          return <ElectionRow key={election.id} election={election} />;
        })}
      </tbody>
    </Table>
  );
}

export default ElectionList;
