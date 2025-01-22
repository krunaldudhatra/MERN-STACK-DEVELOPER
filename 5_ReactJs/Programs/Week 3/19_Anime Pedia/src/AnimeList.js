import { Component } from "react";
import AnimeCard from "./AnimeCard";
// Complete the AnimeList Component
class AnimeList extends Component {
  // render() {
  //   return <div className="anime-list">
  //     {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
  //   </div>;
  // }


  render() {
    const { anime } = this.props; // Destructure anime from props
    return (
      <div className="anime-list">
        {/* Map the anime list received through props */}
        {anime.map((item, index) => (
          <AnimeCard key={index} name={item.name} image={item.image} />
        ))}
      </div>
    );
  }
}

export default AnimeList;
