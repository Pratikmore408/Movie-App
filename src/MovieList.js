import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    
    render(){
        const {movies, addStars, removeStars, handleFav, handleCart} = this.props;
        console.log(this.props);

        return(
    
            <>
            {movies.map((movie, index)=>< MovieCard movies = {movie} 
                                            key={index}
                                            addStar = {addStars}
                                            removeStar = {removeStars}
                                            handleFav={handleFav}
                                            handleCart = {handleCart}
                                            /> )}
            
            
            </>
        );
    }
}

export default MovieList;