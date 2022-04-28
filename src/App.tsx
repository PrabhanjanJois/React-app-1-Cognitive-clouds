import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

function App({ firstName, age }: any) {
  return (
    <div>
      <h1>
        Welcome {firstName} and of {age} years for traning
      </h1>
      <h1>
        <List />
      </h1>
    </div>
  );
}

export default App;
