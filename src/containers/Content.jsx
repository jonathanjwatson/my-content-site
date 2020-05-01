import React, { Component } from "react";
import ContainerRow from "../components/Shared/ContainerRow";
import Joke from "../components/Content/Joke";

class Content extends Component {
  // 1. Create a state object to hold the value.
  state = {
    joke: "",
  };

  componentDidMount() {}
  render() {
    return (
      <ContainerRow>
        <div className="col" style={{ textAlign: "center", margin: "auto" }}>
          <h1>Welcome to My Content!</h1>
          {/* 3. Write a JSX expression to display the value from state. */}
        </div>
          <Joke />
      </ContainerRow>
    );
  }
}

export default Content;
