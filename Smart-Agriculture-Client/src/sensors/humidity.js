// Function to create random values to send to the cloud platform
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const humidity = getRndInteger(0, 100) + " %";
