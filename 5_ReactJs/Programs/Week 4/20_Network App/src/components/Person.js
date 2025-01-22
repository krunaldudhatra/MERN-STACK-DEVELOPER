import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here

  componentWillUnmount() {
    // Alert when the person is about to be removed
    alert(`Person with email ${this.props.person.email} has been removed.`);
  }

  render() {
    const { img, email } = this.props.person;
    const { onRemove } = this.props; 
    return (
      <div className="person">
        {/* <b>X</b>
        <img alt={email} src={img} />
        <p>{email}</p> */}

<b onClick={onRemove} style={{ cursor: "pointer", color: "red" }}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
