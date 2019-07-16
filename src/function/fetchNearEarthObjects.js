const fetchNearEarthObjects = apiUrl => {
  return fetch(apiUrl)
    .then(resp => resp.json())
    .then(data => {
      return {
        links: data.links,
        asteroidsByDate: Object.entries(data.near_earth_objects)
          .map(([date, asteroids]) => {
            return { date, asteroids };
          })
          .sort((a, b) => {
            return a.date > b.date ? 1 : -1;
          })
      };
    })
    .catch(e => console.error(e));
};

export default fetchNearEarthObjects;
