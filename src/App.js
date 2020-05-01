import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import Content from "./containers/Content";
import UserContext from "./utils/UserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/signin" component={SignIn} /> */}
      <Route
        exact
        path="/signin"
        component={() => (
          <SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        )}
      />
      {/* <Route exact path="/content" component={Content} /> */}
      <Route
        exact
        path="/content"
        component={() => (
          <UserContext.Provider value={isLoggedIn}>
            <Content />
          </UserContext.Provider>
        )}
      />
    </Router>
  );
}

export default App;
