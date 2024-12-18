import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={UserSearch} />
            {/* Add more routes here as you expand */}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
