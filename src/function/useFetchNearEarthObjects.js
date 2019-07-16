import { useState, useCallback } from "react";

const apiUrl =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY";

export default function useFetchNearEarthObjects() {
  const [asteroidsByDate, setAsteroidsByDate] = useState([]);
  const [links, setLinks] = useState(null);

  const fetchData = useCallback(
    endpoint => {
      fetch(endpoint)
        .then(resp => resp.json())
        .then(data => {
          setLinks(data.links);
          setAsteroidsByDate(
            Object.entries(data.near_earth_objects)
              .map(([date, asteroids]) => {
                return { date, asteroids };
              })
              .sort((a, b) => {
                return a.date > b.date ? 1 : -1;
              })
          );
        })
        .catch(e => console.error(e));
    },
    [setAsteroidsByDate]
  );

  const fetchNow = useCallback(() => {
    fetchData(apiUrl);
  }, [fetchData]);

  const fetchNext = useCallback(() => {
    fetchData(links.next);
  }, [fetchData, links]);

  const fetchPrev = useCallback(() => {
    fetchData(links.prev);
  }, [fetchData, links]);

  return { fetchNow, fetchNext, fetchPrev, asteroidsByDate };
}
