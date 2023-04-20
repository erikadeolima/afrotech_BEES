let button = document.getElementById("calcular");

button.addEventListener("click", calcular);

function calcular(){
  let nome = document.getElementById("name").value;

  let peso = document.getElementById("peso").value;

  const fator = 0.018;

  let racao = ((peso * fator).toFixed(3))*1000;

  let qtdRacao = document.getElementById("qtdRacao");

  let texto = `A quantidade de ração ideal para ${nome} é de ${racao} gramas por dia.`

  qtdRacao.innerHTML = texto;

}