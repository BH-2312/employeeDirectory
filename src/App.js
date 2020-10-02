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
    let arrEmployees = this.state.employees;
    arrEmployees = arrEmployees.filter(res => res.name.toLowerCase().includes(query.toLowerCase()));
    console.log(arrEmployees);
    if (query === "") {
      console.log("No Query")
      this.setState({ employees: employees });
      this.setState({ search: "" })
      return;
    } else if (arrEmployees.length < 1) {
      this.setState({ search: "" })
      this.setState({ employees: employees });
      console.log(employees)
      console.log("No search")
      alert("No Match");
      return;
    } else {
      this.setState({ employees: arrEmployees });
    }
  };

  sort = query => {
    let arrEmployees = this.state.employees;
    console.log("Sorting");
    console.log(query);
    if (query === "Name") {
      arrEmployees = arrEmployees.sort(function (a, b) {
        console.log("in sort function-name")
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
        if (nameA < nameB) //sort string ascending
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      if (this.state.sortName === true) {
        this.setState({ sortName: false })
        this.setState({ employees: arrEmployees });
        console.log("in true sort NAME");
        return;
      }
      if (this.state.sortName === false) {
        arrEmployees = arrEmployees.reverse();
        this.setState({ sortName: true })
        this.setState({ employees: arrEmployees });
        console.log("in false sort NAME");
        return;
      }
      console.log("in sort query1-NAME")
      console.log(arrEmployees)
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
