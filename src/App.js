import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertMessage from "./components/AlertMessage";
import SearchForm from "./components/SearchForm";
import Map from "./components/Map";
import Forcast from "./components/Forcast";
import CityData from "./components/CityData";
// import weatherData from "./assets/weather.json"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      MovieData: [],
      displayData: false,
      weatherData: [],
      lat: "",
      lon: "",
      error: false,
    };
  }

  updateCityNameState = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  getWeatherData = async () => {
    try {

      const myApiResponseW = await axios.get(
        `${process.env.REACT_APP_URL}/weather?lon=${this.state.lon}&lat=${this.state.lat}`
      )
        this.setState({
          weatherData: myApiResponseW.data,
        });
// console.log("myApiResponseW",myApiResponseW); 

    } catch {
      this.setState({
        error: true,
      });
    }
  }
  getMovieData = async () => {
    try {
      const myApiResponseM = await axios.get(
        `${process.env.REACT_APP_URL}/movies?searchQuery=${this.state.cityName}`
      )
        this.setState({
          MovieData: myApiResponseM.data,
          displayData: true,
        });
// console.log("myApiResponseM",myApiResponseM); 
    } catch {
      this.setState({
        error: true,
      });
    }

  }
  getCityData = async (e) => {
    e.preventDefault();
    try {
      const axiosResponse = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=pk.83c86caa48f11d093c8138a3a3fc4185&city=${this.state.cityName}&format=json`
      )
        this.setState({
          cityData: axiosResponse.data[0],
          lat: axiosResponse.data[0].lat,
          lon: axiosResponse.data[0].lon,
          error: false,
        });
// console.log("axiosResponse",axiosResponse); 

      this.getWeatherData();
      this.getMovieData();
    } catch {
      this.setState({
        error: true,
      });
    }
  };


  // getCityData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const axiosResponse = await axios.get(
  //       `https://us1.locationiq.com/v1/search.php?key=pk.83c86caa48f11d093c8138a3a3fc4185&city=${this.state.cityName}&format=json`
  //     ).then(() => {
  //       this.setState({
  //         cityData: axiosResponse.data[0],
  //         lat: axiosResponse.data[0].lat,
  //         lon: axiosResponse.data[0].lon,
  //         error: false,
  //       });
  //     }).then(() => {
  //       const myApiResponseW =  axios.get(
  //         `${process.env.REACT_APP_URL}/weather?lon=${this.state.lon}&lat=${this.state.lat}`
  //       ).then(()=>{
  //          this.setState({
  //         weatherData: myApiResponseW.data,
  //       });
  //       })       
  //     }).then(()=>{
  //       const myApiResponseM =  axios.get(
  //         `${process.env.REACT_APP_URL}/movies?searchQuery=${this.state.cityName}`
  //       );
  //       console.log(myApiResponseM);
  //       this.setState({
  //         MovieData: myApiResponseM.data,
  //         displayData: true,
  //       });
  //     })
  //   }catch {
  //     this.setState({
  //       error: true,
  //     });
  //   }
  // };


  render() {
    return (
      <div>
        <Header />

        <SearchForm
          getCityData={this.getCityData}
          updateCityNameState={this.updateCityNameState}
        />

        {(this.state.error && <AlertMessage />) ||
          (this.state.displayData && (
            <div>
              <Map
                cityData={this.state.cityData} />
              <CityData
                cityData={this.state.cityData} />
              <Forcast
                weather={this.state.weatherData} />
              <Movies
                MovieData={this.state.MovieData} />
            </div>
          ))}

        <Footer />

      </div>
    );
  }
}
export default App;