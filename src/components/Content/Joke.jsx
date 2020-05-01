import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../utils/UserContext";

const Joke = (props) => {
  const { isLoggedIn } = useContext(UserContext);

  const [joke, setJoke] = useState("");
  useEffect(() => {
    if (isLoggedIn) {
      //TODO: Call the chuck norris joke api.
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          console.log(response.data.value);
          // 2. Set the returned value on state.
          setJoke(response.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(
        "You are not signed in. You are not authorized to view this content."
      );
    }
  }, [isLoggedIn]);
  return <p>{joke}</p>;
};

export default Joke;
