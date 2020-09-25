import React from "react";
import "./style.css";

function Search(props) {
    return (
            <Form inline>
                <FormControl
                    type="text"
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    placeholder="Name"
                    className="mr-sm-2"
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search" />
                <Button 
                variant="outline-primary" 
                onClick={props.handleFormSubmit}>Search</Button>
            </Form>

    );
}

export default Search;