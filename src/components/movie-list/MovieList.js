import React, { Component } from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends Component {

    render() {
        return (
            <div className="row row-cols-1 row-cols-md-6 g-4">
                <MovieElement movie={ this.props.movies[0] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[1] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[2] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[3] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[2] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[0] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[1] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[0] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[2] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[3] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
                <MovieElement movie={ this.props.movies[1] } updateSelectedMovie={ this.props.updateSelectedMovie }/>
            </div>
        )
    }
}