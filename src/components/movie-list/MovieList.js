import React, { Component } from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends Component {

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-6 g-4">
                { this.props.movies.map( (m, index) => (
                    <MovieElement key={ m.title } movie={ m } updateSelectedMovie={ () => {
                        this.props.updateSelectedMovie(index) }} />

                ))}
            </div>
        )
    }
}