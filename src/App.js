import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import Content from "./containers/Content";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/content" component={Content} />
    </Router>
  );
}

export default App;
