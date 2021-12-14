import React ,{ useState, useEffect } from "react";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";

const testUsers = {
  admin: {
    password: "password",
    name: "Administrator",
    role: "admin",
    capabilities: ["create", "read", "update", "delete"],
  },
  editor: {
    password: "password",
    name: "Editor",
    role: "editor",
    capabilities: ["read", "update"],
  },
  writer: {
    password: "password",
    name: "Writer",
    role: "writer",
    capabilities: ["create"],
  },
};

export const LoginContext = React.createContext();

export default function context(props) {
  function can(capability) {
    return state?.user?.capabilities?.includes(capability);
  }

  function login(username, password) {
    if (testUsers[username]) {
      // Create a "good" token, like you'd get from a server
      const token = jwt.sign(testUsers[username], 'hello');
      validateToken(token);
    }
  }

  function logout() {
    setLoginState(false, null, {});
  }

  function validateToken(token) {
    try {
      let user = jwt.verify(token, 'hello');
      setLoginState(true, token, user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log("Token Validation Error", e);
    }
  }

  function setLoginState(loggedIn, token, user) {
    cookie.save("auth", token);
    setLoggedIn(loggedIn);
    setUser(user);
    setToken(token);
  }

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ capabilities: [] });
  const [token, setToken] = useState();

  const state = {
    loggedIn: loggedIn,
    can: can,
    login: login,
    logout: logout,
    user: user,
    token: token,
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
