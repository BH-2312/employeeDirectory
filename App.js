import React, { Component } from "react";
import EmployeeList from './components/employeelist';
import Wrapper from './components/wrapper';
import Search from './components/search';
import Heading from './components/heading';
import employees from './utils/employees.json'
import './App.css';

class App extends Component {
  state = {
    employees: employees,
    search: '',
    sortName: true
  }

  searchName = query => {
    let employeeArray = this.state.employees;
    employeeArray = employeeArray.filter(res => res.name.toLowerCase().includes(query.toLowerCase()));
    if (query === "") {
      console.log("No Search")
      this.setState({ employees: employees });
      this.setState({ search: "" })
      return;
    } else if (employeeArray.length < 1) {
      this.setState({ search: "" })
      this.setState({ employees: employees });
      console.log(employees)
      console.log("No search")
      alert("No Employee Match");
      return;
    } else {
      this.setState({ employees: employeeArray });
    }
  };

  sort = query => {
    let employeeArray = this.state.employees;
    if (query === "Name") {
      employeeArray = employeeArray.sort(function (a, b) {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      if (this.state.sortName === true) {
        this.setState({ sortName: false })
        this.setState({ employees: employeeArray });

        return;
      }
      if (this.state.sortName === false) {
        employeeArray = employeeArray.reverse();
        this.setState({ sortName: true })
        this.setState({ employees: employeeArray });

        return;
      }

    }
  }

  handleSortSelect = event => {
    event.preventDefault();
    console.log("Clicked")

    const value = event.target.getAttribute('data-tag');
    console.log(value)
    this.sort(value);
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchName(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <Heading />
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <EmployeeList
          employees={this.state.employees}
          handleSortSelect={this.handleSortSelect}
        />
      </Wrapper>)
  };
}

export default App;
