import { Component } from "react";
// import the button component here
import { Button } from "../reusable.styled.js";
class Video extends Component {
  render() {
    const {
      id,
      title,
      description,
      image,
      instructor,
      price
    } = this.props.video;

    const { onAdd, onRemove, isInBag } = this.props;

    return (
      // <div className="course">
      //   <img src={image} alt={title} />
      //   <div>
      //     <h3>{title}</h3>
      //     <p>{description}</p>
      //     <p>{instructor}</p>
      //     <strong>{price}</strong>
      //     {/* //Use the button styled component here in place of given button tag*/}
      //     <button onClick={() => (!isInBag ? onAdd(id) : onRemove(id))}>
      //       {!isInBag ? "Add to bag" : "Remove from bag"}
      //     </button>
      //   </div>
      // </div>

      <div className="course">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{instructor}</p>
          <strong>{price}</strong>
          {/* Use the Button styled component here */}
          <Button
            bg={!isInBag ? "blue" : "red"} // Change background color based on state
            onClick={() => (!isInBag ? onAdd(id) : onRemove(id))}
          >
            {!isInBag ? "Add to bag" : "Remove from bag"}
          </Button>
        </div>
      </div>
    );
  }
}

export default Video;
