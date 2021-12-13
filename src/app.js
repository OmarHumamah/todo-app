import React from "react";

import './style.scss'
import ToDo from "./components/todo/todo.js";
import Site from "./context/settingsContext";

export default class App extends React.Component {
  render() {
    return (
      <>
      <Site>
        <ToDo />
      </Site>
      </>
    );
  }
}
