import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityData: {},
      display: false,
      notvalidCityName: false
    }
  }//end constructor
  setCityname = (event) => {
    event.preventDefault()
    this.setState({
      cityName: event.target.value,
      notvalidCityName: false
    })
  }
  getData = async (event) => {
    try {
      event.preventDefault();
      const axiosRespond = await axios.get(`http://localhost:3030/weather?lat=-33.87&lon=151.21&searchQuery=Sydney&format=json`);
      this.setState({
        cityData: axiosRespond.data.data[0],
        display: true
      })
      console.log(this.state.cityData);

    }
    catch (error) {
      this.setState({notvalidCityName: true })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Form onSubmit={this.getData} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City Name</Form.Label>
              <Form.Control type="text" onChange={this.setCityname} placeholder="Enter name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Explore
            </Button>
          </Form>
         
              <p className="city">{this.state.cityData.lat}</p>
              <p className="city">{this.state.cityData.lon}</p>
        
        </main>
        <Footer />
      </div>
    )
  }
}
export default Main