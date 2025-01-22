import React from "react";
class MovieCard extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
          </div>
          <div className="right">
            <div className="title">The Avengers</div>
            <div className="plot">Plot is Secret</div>
            <div className="price">199.00</div>

            <div className="footer">
              <div className="rating">8.9</div>
              <div className="star-dis">star</div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
