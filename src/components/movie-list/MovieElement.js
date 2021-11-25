import React, { Component } from "react";

export default class MovieElement extends Component {

    mouseEnterFilm = () => {
      this.props.updateSelectedMovie( this.props.movie.title );
      console.log("enter film");
    }

    render() {
        return (
          <div className="col">
            <div onMouseEnter={ this.mouseEnterFilm } className="card">
              <img className="card-img-top" src={ this.props.movie.img } alt="" />
              <div className="card-body">
                <h5 className="card-title">{ this.props.movie.title }</h5>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>

        );
    }
}