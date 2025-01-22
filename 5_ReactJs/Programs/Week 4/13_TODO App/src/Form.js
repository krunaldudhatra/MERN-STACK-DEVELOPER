import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };


  handleAddClick = () => {
    const { handleAdd } = this.props; // Get the handleAdd function from props
    if (this.state.text.trim()) {
      handleAdd(this.state.text); // Call handleAdd with the current text
      this.setState({ text: "" }); // Clear the input field
    }
  };
  
  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        {/* <button>Add</button> */}
        <button onClick={this.handleAddClick}>Add</button>
      </div>
    );
  }
}
