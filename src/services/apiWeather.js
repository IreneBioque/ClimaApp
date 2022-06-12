import axios from "axios";

const callToApiWeather = async (lat, lng) => {
  try {
    const instance = axios.create({
      baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric&lang=es`,
    });

    const resp = await instance.get();
    const { weather, main, name, wind } = resp.data;

    return {
      id: weather[0].id,
      name: name,
      description: weather[0].description,
      temp: main.temp,
      feel: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      hum: main.humidity,
      speed: wind.speed,
    };
  } catch (error) {
    console.log(error);
  }
};

export default callToApiWeather;

