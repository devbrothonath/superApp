import React, { useEffect, useState } from "react";
import WeatherJsonData from "../../WeatherJSON";
import axios from "axios"
import WeatherIcon from "../../WeatherIcon.js";
import vector from "../../assets/Vector.svg";
import vector2 from "../../assets/Vector2.svg";
import group from "../../assets/Group.svg";
import "./weatherComp.css";

const WeatherComp = () => {
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState("");
  const [localtime, setLocaltime] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionText, setConditionText] = useState("");
  const [pressure, setPressure] = useState("");
  const [wind, setwind] = useState("");
  const [humidity, sethumidity] = useState("");
  const url =
  "http://api.weatherapi.com/v1/current.json?key=13efc0a80e7f4832adb85007230710&q=London";

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    await axios.get(url)
    .then((response) => {
      const weatherData = response.data;
      setWeather(weatherData);
      const temp = weatherData.current.temp_c;
      const cityTime = weatherData.location.localtime;
      const weatherApiCondition = weatherData.current.condition.code;
      const weatherApiConditionText = weatherData.current.condition.text;
      const pressureMbar = weatherData.current.pressure_mb;
      const windSpeed = weatherData.current.wind_kph;
      const humidityPercent = weatherData.current.humidity;
      // console.log(humidityPercent)
      // console.log(weatherApiConditionText)
      setTemp(temp);
      setLocaltime(cityTime);
      setCondition(weatherApiCondition);
      setConditionText(weatherApiConditionText);
      setPressure(pressureMbar);
      setwind(windSpeed);
      sethumidity(humidityPercent);
    })

    
  }
  console.log(condition);
  function findIconCode(condition) {
    for (const weatherInfo of WeatherJsonData) {
      if(weatherInfo.code === condition) {
        return weatherInfo.icon;
      }
    }
  }
  const iconCode = findIconCode(condition);
  console.log("Icon code : ", iconCode)

  return (
    <div className="levelIchi">
      <div className="levelNi pinkLvl">
        <div className="levelSan dateTime">{localtime}</div>
      </div>
      <div className="levelNi blueLvl">
        <div className="levelShi">
          <WeatherIcon iconCode={iconCode} />
          <h3>{conditionText}</h3>
        </div>
        <div className="levelShi">
          {weather && <h2>{temp}&#176;C</h2>}
          <div>
            <img src={vector} alt="pressure-icon" />
            <p>
              <span>{pressure} mbar</span> pressure
            </p>
          </div>
        </div>
        <div className="levelShi">
          <div>
            <img src={vector2} alt="wind-icon" />
            <p>
              <span>{wind} km/h</span>Wind
            </p>
          </div>
          <div>
            <img src={group} alt="humidity-icon" />
            <p>
              <span>{humidity}%</span>Humidity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComp;
