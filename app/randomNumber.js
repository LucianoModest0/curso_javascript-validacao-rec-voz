const sValue = 1;
const bValue = 100;

const secretNumber = createRandomNumber();

function createRandomNumber() {
  return parseInt(Math.random() * bValue + 1);
}

console.log(secretNumber);

const sValueElement = document.getElementById("sValue");
sValueElement.innerHTML = sValue;

const bValueElement = document.getElementById("bValue");
bValueElement.innerHTML = bValue;
