import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],   // State to store fetched photos
      loading: false   // State to manage loading status
    };
  }

  // Use the required lifecycle methods here
  // Make an API call to fetch images and update state accordingly
  // Ensure that loading is set to true before the API request and false after data is fetched
  componentDidMount() {
    // Lifecycle method to fetch images after the component is mounted
    this.setState({ loading: true }); // Set loading to true before the API request
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ photos: data, loading: false }); // Update photos and stop loading
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
        this.setState({ loading: false }); // Stop loading even if there's an error
      });
  }

  render() {
    // Display loading status here
    // If loading is true, display the message "Loading..."
    return (
      <div className="App">
        {/* {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })} */}


{this.state.loading ? (
          <p>Loading...</p> // Display loading message while images are being fetched
        ) : (
          <div className="image-gallery">
            {this.state.photos.map((photo) => (
              <Image key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
