import React, { Component } from "react";
import EmployeeList from './components/employeelist'
import Wrapper from './components/wrapper'
import Search from './components/search'
import employees from './utils/employees.json'
import './App.css';

function App() {
  return (
  
  <Wrapper>
    <Search></Search>
    <EmployeeList></EmployeeList>
  </Wrapper>
  );
}

export default App;
