import React from "react";
import "./style.css";
import { Button } from 'react-bootstrap';

function Search(props) {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Employee Name"
        className="mr-sm-2"
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
      />
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </form>

  );
}

export default Search;