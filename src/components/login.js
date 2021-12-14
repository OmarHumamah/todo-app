import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import { When } from "react-if";
import { LoginContext } from "../context/context.js";

export default function Login() {
  const context = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    context.login(username, password);
  }
  return (
    <>
      <When condition={context.loggedIn}>
        <Button id="out" intent="danger" onClick={context.logout}>Log Out</Button>
      </When>

      <When condition={!context.loggedIn}>
        <div id="loginDiv">
          <FormGroup>
            <label>
              <InputGroup
                data-testid="logeUser"
                placeholder="UserName"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              <InputGroup
                placeholder="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              <Button data-testid="logBtn" intent="success" text="Login" onClick={handleSubmit} />
            </label>
          </FormGroup>
        </div>
      </When>
    </>
  );
}

//............

// import React from 'react';
// import {When} from 'react-if';

// import { LoginContext } from './context.js';

//class Login extends React.Component {
// static contextType = LoginContext;

// constructor(props) {
//   super(props);
//   this.state = { username: '', password: '' };
// }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.context.login(this.state.username, this.state.password);
//   };

//   render() {
//     return (
//       <>
//         <When condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out</button>
//         </When>

//         <When condition={!this.context.loggedIn}>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               placeholder="UserName"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <input
//               placeholder="password"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <button>Login</button>
//           </form>
//         </When>
//       </>
//     );
//   }
// }

// export default Login;
