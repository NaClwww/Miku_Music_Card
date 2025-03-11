import Showimg from "./img";
import Jump from "./Jump";
import AboutMe from "./Aboutme";
import React from "react";
import "./Button.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jump />
        <Showimg />
        <button type="button" className="custom-button" onClick={AboutMe}>About Me</button>
      </header>
    </div>
  );
}

export default App;
