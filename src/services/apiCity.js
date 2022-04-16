

export const callToApiCity = async (searchName) => {
  return await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchName}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=${process.env.REACT_APP_API_CITY_KEY}`
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const cities = dataApi.features.map((city) => {
        return {
          id: city.id,
          name: city.place_name,
          lng: city.center[0],
          lat: city.center[1],
          minX: city.bbox[0],
          minY: city.bbox[1],
          maxX: city.bbox[2],
          maxY: city.bbox[3],
        };
      });
      return cities;
    });
};
