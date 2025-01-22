import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (newTodoText) => {
    // complete the function to add a new Todo to the list

    if (newTodoText.trim()) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { text: newTodoText }]
      }));
    }
  };

  handleRemove = (indexToRemove) => {
    // complete the function to remove the Todo from the list

    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, index) => index !== indexToRemove)
    }));
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        {/* <Form />
        <List /> */}

<Form handleAdd={this.handleAdd} />
<List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
