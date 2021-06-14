import React, { Component } from "react";
export class Map extends Component {
  render() {
    return (
      <div>
        <img
          className="map"
          src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`}
          alt=""
        />
      </div>
    );
  }
}
export default Map;
