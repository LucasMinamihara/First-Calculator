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
    if (choiceNumber.length > 0) {
      let choiceNumberRange = choiceNumber.length;
      console.log(choiceNumberRange);
      for (let i = 0; i < choiceNumberRange.length; i++) {
        console.log(choiceNumber[i]);
        valueCalc += choiceNumber[i].toString;
        console.log("i am here");
      }
      console.log(valueCalc);
      console.log(choiceNumber);
    }
  });
});
