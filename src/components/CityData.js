import React, { Component } from "react";
export class CityData extends Component {
  render() {
    return (
      <div>
        <p className="city">{this.props.cityData.display_name}</p>
        <p className="city">{this.props.cityData.lat}</p>
        <p className="city">{this.props.cityData.lon}</p>
      </div>
    );
  }
}
export default CityData;