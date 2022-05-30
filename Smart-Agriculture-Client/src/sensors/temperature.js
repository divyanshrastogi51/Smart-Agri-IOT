function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const temperature = getRndInteger(-50, 50) + " °C";
