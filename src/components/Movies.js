import React, { Component } from 'react'

export class Movies extends Component {

  render() {
    return (
      <div> {this.props.MovieData.map((movieObj) => {
        return (
          <div>
            <img
              className="map"
              src={movieObj.img}
              alt=""
            />
            <p className="">{movieObj.overview}</p>
            <p className="">{movieObj.vote_average}</p>
            <p className="">{movieObj.popularity}</p>
            <p className="">{movieObj.title}</p>
          </div>);
      })}
      </div>

    )
  }
}

export default Movies
