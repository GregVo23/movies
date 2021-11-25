import React, { Component } from "react";

export default class MovieDetails extends Component {

    render() {
        return (
            <div className="w-75 border p-4 d-flex flex-column">
                <div className="position-fixed">
                <h5>{ this.props.movie.title }</h5>
                <hr className="w-100" />
                <div className="w-50">
                    <img className="img-fluid" alt={ this.props.movie.title }  src={ this.props.movie.img } />
                </div>
                <hr className="w-100" />
                <span className="text-secondary">{ this.props.movie.details }</span>
                <span>{ this.props.movie.description }</span>
                </div>
            </div>
        );
    } 
}