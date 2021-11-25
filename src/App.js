import React, { Component } from "react";
import { Header, MovieDetails, MovieList } from "./components";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        title: "Titanic",
        img: "https://stevejandrewscom.files.wordpress.com/2017/08/titanic.jpg",
        details: "R | 267 min |Romance, HHistoire",
        description: "Un film de romance entre deux personnages issues de classe différente à bord du Titanic."
      },
      {
        title: "Judge Dredd",
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW0nsOHJ5Tmra5rvjsvUpE8oio39z-ZCtAMOVu8JfGjlDs2OHM",
        details: "R | 267 min |Romance, HHistoire",
        description: "Un film de romance entre deux personnages issues de classe différente à bord du Titanic."
      },
      {
        title: "Skyfall",
        img: "https://i.pinimg.com/originals/6e/ca/66/6eca66dd1980297c9d0b021f041042e3.jpg",
        details: "R | 267 min |Romance, HHistoire",
        description: "Un film de romance entre deux personnages issues de classe différente à bord du Titanic."
      },
      {
        title: "Star Wars",
        img: "https://www.tenatthetop.org/wp-content/uploads/2021/05/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpg",
        details: "R | 267 min |Romance, HHistoire",
        description: "Un film de romance entre deux personnages issues de classe différente à bord du Titanic."
      }],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    })
    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill p-4">
          <MovieList movies={ this.state.movies } updateSelectedMovie={ this.updateSelectedMovie }/>
          <MovieDetails movie={ this.state.movies[this.state.selectedMovie] } />
        </div>
      </div>
    );
  }
}

export default App;

