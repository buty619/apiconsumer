import React from "react";
import "../App.css";

export default function Asteroid({ asteroidInfo }) {
  const name = asteroidInfo.name;
  const date = asteroidInfo.close_approach_data[0].close_approach_date_full
    ? asteroidInfo.close_approach_data[0].close_approach_date_full
    : asteroidInfo.close_approach_data[0].close_approach_date;
  const km = asteroidInfo.close_approach_data[0].miss_distance.kilometers;
  return (
    <tr>
      <td>{name}</td>
      <td>{date}</td>
      <td>{km}</td>
    </tr>
  );
}
