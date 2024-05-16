const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  let number = numberInput.value;
  if (number === "" || number === null) {
    outputContainer.innerText = "Please enter a valid number";
    return;
  }
  number = parseInt(number, 10);

  if (number <= 0) {
    outputContainer.innerText =
      "Please enter a number greater than or equal to 1";
    return;
  } else if (number >= 4000) {
    outputContainer.innerText =
      "Please enter a number less than or equal to 3999";
    return;
  }
  const romanNumbersData = {
    M: 1000,
    CM:900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V:5,
    I: 1,
  };
  let romanNumber = "";
  while(number){
    for(let romanLetter in romanNumbersData){
        if(number >= romanNumbersData[romanLetter]){
            romanNumber = romanNumber + romanLetter;
            number -= romanNumbersData[romanLetter];
            break;
        }
    }
  }
  outputContainer.innerText = romanNumber;
});
