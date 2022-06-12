import { response } from "msw";
import { FunctionComponent, ReactFragment } from "react";
import { useEffect, useState } from "react";
import callToApiWeather from "../services/apiWeather";

const InfoWeather = ({data}) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await callToApiWeather(data.lat, data.lng);

      setWeather(consulta);
    };

    consultaAPI();
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
