
const outputDiv = document.getElementById("output");


function getInitialArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Initial 3-second delay
  });
}

// Function to filter even numbers after 1 second
function filterEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      outputDiv.textContent = evenNumbers.toString(); // Display [2, 4]
      resolve(evenNumbers);
    }, 1000);
  });
}


function multiplyByTwo(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      outputDiv.textContent = multiplied.toString(); // Display [4, 8]
      resolve(multiplied);
    }, 2000);
  });
}

getInitialArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => {
    outputDiv.textContent = "An error occurred: " + error;
  });
