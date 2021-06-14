import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
export class AlertMessage extends Component {
  render() {
    return (
      <div>
        <Alert variant="danger">
          This is a {this.props.error} alert-check it out!
        </Alert>
      </div>
    );
  }
}
export default AlertMessage;