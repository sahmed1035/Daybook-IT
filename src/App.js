import React, { Fragment, useEffect } from "react";

// bringing materialize-css
import "materialize-css/dist/css/materialize.min.css";
// bringing in materialize javascript for models and stuff
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {
  // initializing Materialize JavaScript. Should be able to use Models
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
