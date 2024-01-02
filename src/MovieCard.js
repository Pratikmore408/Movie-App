import React from "react";

class MovieCard extends React.Component{
    

    

    render(){
        // console.log(this.props);
        const{movies, addStar, removeStar, handleFav, handleCart} = this.props;
        const{title, plot, price, rating, stars, fav, cart, poster} = this.props.movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster"  src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs.{price}</div>

                        <div className="footer">
                            <div className="rating">Imdb:{rating}</div>
                            <div className="star-dis">
                                <img  className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                                 onClick={()=>removeStar(movies)} />

                                <img  className="star" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                <img  className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" 
                                onClick={()=>addStar(movies)} />

                                <span className="starCount">{stars}</span>

                            </div>
                            {fav ? <button className="unfavorite-btn" onClick={()=>handleFav(movies)} >Un-Favorite</button> :
                            <button className="favorite-btn" onClick={()=>handleFav(movies)}>Favorite</button>}
                            
                            
                            <button className={cart? "uncart-btn":"cart-btn"} onClick={()=>handleCart(movies)}>{cart? "Remove from Cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;