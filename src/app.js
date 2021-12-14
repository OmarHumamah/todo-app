import React, { useContext } from "react";
import './style.scss'
import ToDo from "./components/todo/todo.js";
import Site from "./context/settingsContext";
import  LoginContext  from "./context/context";


export default function app() {
  return (
    <>
      <LoginContext>
      <Site>
        <ToDo />
      </Site>
      </LoginContext>
    </>
  )
}


