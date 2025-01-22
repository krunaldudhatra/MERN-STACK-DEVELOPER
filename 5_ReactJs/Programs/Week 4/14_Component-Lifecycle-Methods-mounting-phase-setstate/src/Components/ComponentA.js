import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ComponentA"
    }
    console.log("ComponentA Constructor");

  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
  }

  render() {
    console.log("ComponentA Render")
    // this.state = { name: "CA" };
    return (
      <>
        <h1>{this.state.name}</h1>
        <ComponentB/>
      </>
    );
  }
};

export default ComponentA;