import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  // render() {
  //   return <div className="anime-card">
  //     <img src={} alt={} />
  //       <p>{}</p>
  //   </div>;
  // }


  render() {
    const { image, altText, name } = this.props;

    return (
      <div className="anime-card">
        <img src={image} alt={altText} />
        <p>{name}</p>
      </div>
    );
  }
}

export default AnimeCard;
