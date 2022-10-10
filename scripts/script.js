// Manipulando o DOM
let btnOp = document.querySelectorAll(".btnOp");
const nums = document.querySelectorAll(".num");

// Selecionando as telas da calculadora
const telaMaior = document.querySelector("#telaMaior");
const telaMenor = document.querySelector("#telaMenor");

// Criando variáveis
let equacao = "";

// Importanto as operações matemáticas
import { soma, subtrair, dividir, multiplicar } from "./operacoes.js";

// Criando minha calculadora em forma de objeto
const calculadora = {
  equacao: [],
  somar: soma(),
  subtrair: subtrair(),
  mult: dividir(),
  divi: multiplicar(),
};

nums.forEach((num) => {
  num.addEventListener("click", () => {
    equacao += num.textContent;
    passarParaTela(equacao, telaMaior);
  });
});

btnOp.forEach((cadaBotao) => {
  cadaBotao.addEventListener("click", conferir);
});

function conferir() {
  if (!equacao) return;
  telaMenor.textContent += telaMaior.textContent + ` ${this.textContent} `;
  telaMaior.textContent = "";
  calculadora.equacao.push(equacao);
  telaMaior.textContent = "";
  equacao = "";
  //   console.log(calculadora.equacao);
}
