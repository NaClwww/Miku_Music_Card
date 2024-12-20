import React from "react";
import "./img.css"; // 引入样式文件
import miku from "./show.jpg"

function Showimg() {
    return (
        <div className="App">
          <div className="image-container">
            <img src={miku} alt="full-screen" />
          </div>
        </div>
      );
    }

export default Showimg;
