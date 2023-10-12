import React from "react";

const WeatherIcon = ({ iconCode }) => {
  const iconPath = `${process.env.PUBLIC_URL}/icons/${iconCode}.png`;

  return <img src={iconPath} alt={`Weather Icon for ${iconCode}`}></img>;
};


export default WeatherIcon;
