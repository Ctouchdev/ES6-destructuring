import React from "react";
import ReactDOM from "react-dom";

import animals, { useAnimals } from "./data";
import cars from "./practice";

// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// const [cat, dog] = animals;

// const {
//   name,
//   sound,
//   feeding: { food, water }
// } = cat;

// // const { name: catName, sound: catSound } = cat;

// // const { name, sound } = cat;

// const [animal, makeSound] = useAnimals(cat);

// console.log(animal);
