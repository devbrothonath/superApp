import React from "react";
import snow from "../../assets/snow.png";
import "./newsComp.css"

const NewsComp = () => {
  return (
    <div className="newsComp">
      <div className="textImg">
        <img src={snow} alt="snow" />
        <div className="bigText">
          <h2>Want to climb Mount Everest?</h2>
          <span>2-20-2023</span>
          <span>07:35 PM</span>
        </div>
      </div>
      <div className="textText">
        <p>
          In the years since human beings first reached the summit of Mount
          Everest in 1953, climbing the world's highest mountain has changed
          dramatically. Today, hundreds of mountaineers manage the feat each
          year thanks to improvements in knowledge, technology, and the
          significant infrastructure provided by commercially guided expeditions
          that provide a veritable highway up the mountain for those willing to
          accept both the......
        </p>
      </div>
    </div>
  );
};

export default NewsComp;
