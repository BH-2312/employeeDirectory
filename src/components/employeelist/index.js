import React from "react";

function EmployeeList(props) {

    const employee = props.employees
  
    return (
      <Table>
        <thead>
          <tr>
            <th>Profile Pic</th>
            <th
              onClick={props.handleSortSelect}
              data-tag="Name"
            >Name 🔀</th>
            <th
              onClick={props.handleSortSelect}
              data-tag="Role"
            >Role 🔀</th>
            <th
              onClick={props.handleSortSelect}
              data-tag="Work Location"
            >Work Location 🔀</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(item => (
            <tr key={item.id}>
              <td><Image alt={item.name} src={item.image} roundedCircle fluid /></td>
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