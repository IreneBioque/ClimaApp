const callToApiCity = async (searchName) => {
  const token =
    "pk.eyJ1IjoidHJ5YXZuYSIsImEiOiJjbDFrbHhpbzYwMjRjM2Vtb29uc3owMG96In0.2Q9xtnNggTkzP9gjTyhMMg";
  return await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchName}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=${token}`
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const cities = dataApi.features.map((city) => {
        return {
          id: city.id,
          name: city.place_name,
          lng: city.center[0],
          lat: city.center[1],
        };
      });
      return cities;
    });
};

export default callToApiCity;
