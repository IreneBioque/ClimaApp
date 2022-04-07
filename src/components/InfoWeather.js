import { useEffect, useState } from "react";
import callToApiWeather from "../services/apiWeather";

const InfoWeather = (props) => {
  const { data } = props;
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    callToApiWeather(data.lat, data.lng).then((response) => {
      setWeather(response);
    });
  }, []);
  console.log("W", weather, data.lat, data.lng);
  return (
    <ul>
      <li>{weather.description}</li>
      <li>Temperatura: {weather.temp} ºC</li>
      <li>Sensación de temperatura: {weather.feel} ºC</li>
      <li>Temperatura mínima: {weather.temp_min} ºC</li>
      <li>Temperatura máxima: {weather.temp_max} ºC</li>
      <li>Humedad: {weather.hum}</li>
      <li>Velocidad del viento: {weather.speed}</li>
    </ul>
  );
};

export default InfoWeather;
