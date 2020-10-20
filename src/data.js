const animals = [
  {
    name: "cat",
    sound: "meow",
    feeding: {
      food: "2 times per day",
      water: "drinky water all days"
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
