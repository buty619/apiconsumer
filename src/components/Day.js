import React from "react";
import Asteorid from "./Asteroid";
import "../App.css";

export default function Day({ date, asteroids }) {
  return (
    <div className="day">
      <h2>{date}</h2>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DATE</th>
            <th>Km</th>
          </tr>
        </thead>
        <tbody>
          {asteroids.map(asteroid => (
            <Asteorid key={asteroid.id} asteroidInfo={asteroid} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
