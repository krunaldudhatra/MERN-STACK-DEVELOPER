import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {

    const { todos, handleRemove } = this.props;
    return (
      <div className="list">
        {/* Render the todo here from the props*/}

        {/* Iterate through todos and render each one */}
        {todos.map((todo, index) => (
          <Todo
            key={index} // Use index as the unique key
            text={todo.text} // Pass the text of the todo
            todo={todo}
            handleRemove={() => handleRemove(index)} // Pass index to handleRemove
          />
        ))}
      </div>
    );
  }
}
