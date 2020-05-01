import React, { Component } from "react";
import ContainerRow from "../components/Shared/ContainerRow";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <ContainerRow>
        <div className="col" style={{ textAlign: "center", margin: "auto" }}>
          <h1>Welcome to My Content Site!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sit
            mollitia totam perspiciatis qui adipisci odio voluptates doloremque
            ex quibusdam temporibus excepturi rem quas, eos illo, neque suscipit
            non provident.
          </p>
          <Link to="/signin">
            <button className="btn btn-primary">Sign In</button>
          </Link>
        </div>
      </ContainerRow>
    );
  }
}

export default Home;
