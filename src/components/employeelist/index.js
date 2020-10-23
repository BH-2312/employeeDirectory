import React from "react";
import "./style.css";
import { Button, Table } from 'react-bootstrap';

function EmployeeList(props) {

  const employee = props.employees

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Profile Pic</th>
          <th>
            Employee Name
          <Button
              type="button"
              onClick={props.handleSortSelect}
              data-tag="Name"
              id="Btn"
            >
              Sort
          </Button>
          </th>
          <th>Occupation </th>
          <th>Location </th>
        </tr>
      </thead>
      <tbody>
        {employee.map(item => (
          <tr key={item.id}>
            <td><img alt={item.name} src={item.image} /></td>
            <td>{item.name}</td>
            <td>{item.occupation}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>

  );
}

export default EmployeeList;