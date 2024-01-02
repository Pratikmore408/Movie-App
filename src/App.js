import { Component } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MoviesData";
import "./index.css";

export default class App extends Component{
  constructor(){
    super();
    this.state = {
        movies: movies,
        cartCount: 0
    }
}

handleAddStar = (movie) =>{
    const{movies} = this.state;
    const movieIndex = movies.indexOf(movie);

    if(movies[movieIndex].stars >= 5){
        return;
    }

    movies[movieIndex].stars += 0.5

    this.setState({

        movies

    });

}

handleRemoveStar=(movie)=>{
    const{movies} = this.state;
    const movieIndex = movies.indexOf(movie);
    
    if(movies[movieIndex].stars === 0 ){
        return;
    }

    movies[movieIndex].stars -= 0.5;

    this.setState({
        movies
    });
}

handleFavorite= (movie)=>{
    const{movies} = this.state;
    
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].fav = !movies[movieIndex].fav

    this.setState({
        movies
    });

   
}

handleItemCart= (movie)=>{
    const{movies} = this.state;
    let {cartCount} = this.state;
    const movieIndex = movies.indexOf(movie);

    movies[movieIndex].cart = !movies[movieIndex].cart

    if(movies[movieIndex].cart){
        cartCount += 1;
     }else{
        cartCount -= 1;
     }
 
     this.setState({
         movies,
         cartCount
     })
     console.log(cartCount);
}

  render(){
  let {movies, cartCount} = this.state
  
  return (
    <>
    <Navbar count = {cartCount} />
    <MovieList movies = {movies}
              addStars = {this.handleAddStar}
              removeStars = {this.handleRemoveStar}
              handleFav = {this.handleFavorite}
              handleCart = {this.handleItemCart} />
    </>
  );
  }
}



