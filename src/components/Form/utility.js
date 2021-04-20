export const randomNum = (min, max)=> (Math.floor(Math.random()*(max-min)+min))

export const checkValidity = (value, validation) => {
  if (value.length > 0) return true;
  else return false;
};

//static data
export const title = [
  "George",
  "Americanah",
  "Angelmaker",
  "Annabel",
  "Annihilation",
  "Away",
];
export const color = [
  "lightblue",
  "lightgreen",
  "pink",
  "orange",
  "gray",
  "lightpurple",
  "red",
  "white",
  "yellow",
  "brown",
];
export const page = ["S", "M", "L"];
export const size = ["S", "M", "L"];