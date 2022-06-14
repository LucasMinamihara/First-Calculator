"use strict";
const number = window.document.querySelectorAll(".number");
let display = window.document.querySelector(".screen");
let choiceNumber = [];
let valueCalc;
number.forEach((eachNumber) => {
  display.innerHTML = "";
  eachNumber.addEventListener("click", function () {
    display.innerHTML += Number(eachNumber.textContent);
    choiceNumber.push(Number(eachNumber.textContent));
    console.log(choiceNumber);
  });
});
let equation = 1;
let numberConc = "";
let symbolClicked;
let takingValues = [];
const symbol = window.document
  .querySelectorAll(".symbol")
  .forEach((eachSymbol) => {
    eachSymbol.addEventListener("click", function () {
      symbolClicked = eachSymbol.textContent;
      if (symbolClicked == "*") {
        for (let i = 0; i < choiceNumber.length; i++) {
          numberConc += String(choiceNumber[i]);
        }
        takingValues.push(numberConc);
        numberConc = "";
        choiceNumber = [];
        multP(takingValues.length - 1);
      }
      if (symbolClicked == "+") {
        for (let i = 0; i < choiceNumber.length; i++) {
          numberConc += String(choiceNumber[i]);
        }
        takingValues.push(numberConc);
        numberConc = "";
        choiceNumber = [];
        sum();
      }
      if (symbolClicked == "-") {
        for (let i = 0; i < choiceNumber.length; i++) {
          numberConc += String(choiceNumber[i]);
        }
        takingValues.push(numberConc);
        numberConc = "";
        choiceNumber = [];
        minus();
      }
    });
  });

function multP(indexTakingValues) {
  console.log(takingValues);
  for (let i = 0; i < takingValues.length; i++) {
    equation = takingValues[i] * equation;
    console.log(equation);
  }
}
console.log(equation);
