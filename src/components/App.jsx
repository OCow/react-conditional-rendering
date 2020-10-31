import React from "react";

import LoginOrRegister from "./LoginOrRegister.jsx";

// let isLoggedIn = false;
let userIsRegistered = true;

function App() {
  return (
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
    <div className="container">
      <LoginOrRegister userIsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
