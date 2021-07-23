import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useState, useMemo } from "react";
import data from "../../db.json";
import { useHistory } from "react-router-dom";

const VoterList = ({ voters }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const [tableData, setTableData] = useState(voters);

  let history = useHistory();

  const handleSelectedRows = (e) => {
    setSelectedRows(e.selectedRows);
    console.log("selectedRows", selectedRows);
  };

  const deleteVoter = (id) => {
    return "delete ID";
  };

  const deleteSelected = () => {
    console.log("delete these", selectedRows);
  };

  const editPerson = (id) => {
    history.push(`/register/${id}`);
  };

  const columns = useMemo(() => [
    {
      cell: (row) => (
        <>
          <Button variant="success" onClick={() => editPerson(row.id)}>
            edit
          </Button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) => (
        <>
          <Button variant="success" onClick={() => deleteVoter(row.id)}>
            delete
          </Button>
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "id",
      selector: "id",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
    },
    {
      name: "City",
      selector: "city",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Birth Date",
      selector: "birthDate",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "phone",
      sortable: true,
    },
  ]);

  return (
    <div>
      <>
        <DataTable
          columns={columns}
          data={tableData}
          selectableRows // add for checkbox selection
          onSelectedRowsChange={handleSelectedRows}
          Clicked
        />
        <br />
        <Button onClick={deleteSelected()}> Delete selected</Button>
      </>
    </div>
  );
};

export default VoterList;
