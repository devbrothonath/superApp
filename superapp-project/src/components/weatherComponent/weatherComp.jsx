import React from "react";
import weather from "../../assets/weather/64x64/day/116.png";
import vector from "../../assets/Vector.svg"
import vector2 from "../../assets/Vector2.svg"
import group from "../../assets/Group.svg"
import "./weatherComp.css";


const WeatherComp = () => {
  return (
    <div className="levelIchi">
      <div className="levelNi pinkLvl">
        <div className="levelSan">2-20-2023</div>
        <div className="levelSan">07:35 PM</div>
      </div>
      <div className="levelNi blueLvl">
        <div className="levelShi">
          <img src={weather} alt="weather" />
          <h3>Heavy Rain</h3>
        </div>
        <div className="levelShi">
          <h2>24&#176;C</h2>
          <div>
            <img src={vector} alt="vector" />
            <p>
              <span>1010 mbar</span> pressure
            </p>
          </div>
        </div>
        <div className="levelShi">
          <div>
            <img src={vector2} alt="" />
              <p>
                <span>3.7 km/h</span>Wind
              </p>
          </div>
          <div>
            <img src={group} alt="" />
              <p>
                <span>83%</span>Humidity
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComp;
