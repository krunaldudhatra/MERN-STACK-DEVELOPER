import { Component } from "react";

export class Todo extends Component {
 

  render() {

    const { todo, handleRemove } = this.props; 
    
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        {/* <button>x</button> */}
        <button onClick={() => handleRemove(todo.text)}>x</button>
      </div>
    );
  }
}
