const callToApiWeather = async (lat, lng) => {
  const token = "aa78c8ca55c792312fec83946f85e533";
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${token}&units=metric&lang=es`
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const weather = {
        id: dataApi.weather[0].id,
        name: dataApi.name,
        description: dataApi.weather[0].description,
        temp: dataApi.main.temp,
        feel: dataApi.main.feels_like,
        temp_min: dataApi.main.temp_min,
        temp_max: dataApi.main.temp_max,
        hum: dataApi.main.humidity,
        speed: dataApi.wind.speed,
      };
      return weather;
    });
};

export default callToApiWeather;
