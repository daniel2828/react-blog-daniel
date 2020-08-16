import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";
import Router from "./Router";
function App() {
  return (
    <div className="App">
      {/*<Peliculas />*/}
      <Router />
    </div>
  );
}

export default App;
