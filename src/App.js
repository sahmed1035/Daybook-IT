import React, { useEffect } from "react";

// bringing materialize-css
import "materialize-css/dist/css/materialize.min.css";
// bringing in materialize javascript for models and stuff
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

const App = () => {
  // initializing Materialize JavaScript. Should be able to use Models
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <h1>Daybook IT</h1>
    </div>
  );
};

export default App;
