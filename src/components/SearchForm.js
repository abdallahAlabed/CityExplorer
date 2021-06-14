import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export class SearchForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.getCityData} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name:</Form.Label>
            <Form.Control
              onChange={this.props.updateCityNameState}
              type="text"
              placeholder="write a name of a city"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button className="button" variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}
export default SearchForm;