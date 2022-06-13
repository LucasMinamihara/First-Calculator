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
      // Need to create a new logical here to string each number of ChoiceNumber Array and then tranform it to a number again 
      // but i will do it only if the user dont click on symbol, for example if click on minus button i will just agroup the array and do the calaculation with another number clicked by user.
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
