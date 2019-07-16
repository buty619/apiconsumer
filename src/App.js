import React, { useEffect } from "react";
import useFetchNearEarthObjects from "./function/useFetchNearEarthObjects";
import Day from "./components/Day";
import "./App.css";

export default function App() {
  const { fetchNow, fetchNext, fetchPrev, asteroidsByDate } = useFetchNearEarthObjects();

  useEffect(() => {
    fetchNow();
  }, [fetchNow]);

  const handleClickNext = () => {
    fetchNext();
  };

  const handleClickPrev = () => {
    fetchPrev();
  };

  return (
    <div className="App">
      <div className="navbar">
        <button onClick={handleClickPrev}>prev</button>
        <h1>NASA API</h1>
        <button onClick={handleClickNext}>next</button>
      </div>
      {asteroidsByDate
        ? asteroidsByDate.map(({ date, asteroids }) => {
            return <Day key={date} date={date} asteroids={asteroids} />;
          })
        : null}
    </div>
  );
}
