var start = document.getElementById("number1");
var end = document.getElementById("number2");

var button = document.querySelector(".submit-button");
var form = document.querySelector(".form");
function checkInput() {
  if (start.value.trim() !== "" && end.value.trim() !== "") {
    button.style.backgroundColor = "#fa923f";
    button.disabled = false;
  } else {
    button.style.backgroundColor = "#979695";
    button.disabled = true;
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Submitted");
  primeArray = primeList(number1.value, number2.value);
  arrayLength = primeArray.length;
  var output = document.getElementById("output");
  output.innerHTML = primeArray;
  var output = document.getElementById("output2");
  output2.innerHTML = "Number of Prime numbers " + arrayLength;
});
function primeList(number1, number2) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  primeNumbersList = [];
  if (number1 < number2) {
    for (var i = number1; i <= number2; i++) {
      if (isPrime(i)) {
        primeNumbersList.push(i);
      }
    }
    console.log("this list" + primeNumbersList);
    return primeNumbersList;
  } else if (number1 > number2) {
    for (var i = number1; i > number2; i--) {
      if (isPrime(i)) {
        primeNumbersList.push(i);
      }
    }
    return primeNumbersList;
  }
}
function isPrime(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}
