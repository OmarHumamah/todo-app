import React, { useContext } from 'react'
import {When} from 'react-if';
import { LoginContext } from '../context/context';

export default function Auth(props) {
  
  const context = useContext(LoginContext);

  const isLoggedIn = context.loggedIn;
  const canDo = props.capability ? context.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;

  return (
    <When condition={okToRender}>
        {props.children}
      </When>
  )
}


 //...........................
// import React from 'react';
// import {When} from 'react-if';

// import { LoginContext } from './context.js';

//class Login extends React.Component {

  // static contextType = LoginContext;

//   render() {

//     const isLoggedIn = this.context.loggedIn;
//     const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
//     const okToRender = isLoggedIn && canDo;

//     return (
//       <When condition={okToRender}>
//         {this.props.children}
//       </When>
//     );
//   }
// }

// export default Login;
