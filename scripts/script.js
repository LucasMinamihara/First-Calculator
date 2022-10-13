let fazerEquacao = false;
let valorDigitado = 0;

// Manipulando o DOM
let btnOp = document.querySelectorAll(".btnOp");
const nums = document.querySelectorAll(".num");

// Selecionando as telas da calculadora
const telaMaior = document.querySelector("#telaMaior");
const telaMenor = document.querySelector("#telaMenor");

// Criando variáveis
let equacao = "";
let resultado = 0;
let equacaoInteira = "";

// Criando minha calculadora em forma de objeto
const calculadora = {
  equacao: [],
};

nums.forEach((num) => {
  num.addEventListener("click", () => {
    if (telaMenor.textContent.includes("ans")) telaMenor.textContent = "";
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
  calculadora.equacao.push(equacao);
  calculadora.equacao.push(this.textContent);
  telaMaior.textContent = "0";
  equacao = "";
  if (this.textContent == "=") {
    operacao();
  }
}

function operacao() {
  calculadora.equacao.forEach((cadaValor) => {
    if (cadaValor == "=") return;
    equacaoInteira += cadaValor;
  });
  console.log(equacaoInteira);
  resultado = eval(equacaoInteira);
  telaMenor.textContent = `ans ${resultado}`;
  limparCalculadora();
}

function limparCalculadora() {
  calculadora.equacao = [];
  resultado = 0;
  equacaoInteira = "";
}
