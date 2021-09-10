import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
