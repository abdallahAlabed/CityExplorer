import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
export class Forcast extends Component {
  render() {
    return (
      <>
        {this.props.weather.map((weatherObj) => {
          return (
            <>
              <ListGroup
                style={{ width: "30%", marign: "Auto", textAlign: "center" }}
              >
                {weatherObj.description}
              </ListGroup>
              <ListGroup
                style={{ width: "30%", margin: "Auto", textAlign: "center" }}
              >
                {weatherObj.date}
              </ListGroup>
            </>
          );
        })}
      </>
    );
  }
}
export default Forcast;