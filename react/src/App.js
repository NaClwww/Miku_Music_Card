import React from "react";
import "./css/Button.css";
import miku from "./show.jpg"
import "./css/img.css"
import Music from './MusicId.txt';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Showimg />
        <button type="button" className="button-jump" onClick={Jump}>Jump</button>
        <button type="button" className="button-aboutme" onClick={AboutMe}>About</button> */}
        <div className="img">
           <div className="image-container">
            <img src={miku} alt="full-screen" />
            <button className="button-jump" onClick={Jump}>随机音乐</button>
            <button className="button-aboutme" onClick={()=>{window.location.href = "https://github.com/NaClwww/Miku_Music_Card"}}>关于项目</button>
          </div>
        </div>
      </header>
    </div>
  );
}

async function Jump() {
  const response = await fetch(Music);
  const text = await response.text();
  const lines = text.split('\n');
  const id = lines[Math.floor(Math.random() * lines.length)];
  const weburl = `https://y.music.163.com/m/song?id=${id}`;
  return window.location.href = weburl;
}

export default App;