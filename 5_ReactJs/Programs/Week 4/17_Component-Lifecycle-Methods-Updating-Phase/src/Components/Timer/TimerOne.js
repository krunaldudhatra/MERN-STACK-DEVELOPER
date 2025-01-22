import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    console.log("Timer Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
      </div>
    );
  }
}