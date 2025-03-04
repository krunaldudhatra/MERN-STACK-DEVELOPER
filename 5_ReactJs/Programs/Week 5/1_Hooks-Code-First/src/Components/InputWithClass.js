import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              className="input"
              onChange={this.handleName}
              value={this.state.name}
            />
          </Row>
          <Row label="Last Name">
            <input
              className="input"
              onChange={this.handleLastName}
              value={this.state.lastname}
            />
          </Row>
        </div>

        <h2>Hello,{this.state.name + " " + this.state.lastname} </h2>
      </>
    );
  }
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
