import { Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useState, useMemo } from "react";
import data from "../../db.json";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

const VoterList = () => {
  const [location, setLocation] = useState(`/register/:id`);
  const [selectedRows, setSelectedRows] = useState([]);
  let history = useHistory();

  const handleSelectedRows = (e) => {
    setSelectedRows(e.selectedRows);
    console.log("selectedRows", selectedRows);
  };

  const deleteVoter = (id) => {
    return "delete ID";
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
          data={data.voters}
          selectableRows // add for checkbox selection
          onSelectedRowsChange={handleSelectedRows}
          Clicked
        />
      </>
    </div>
  );
};

export default VoterList;
