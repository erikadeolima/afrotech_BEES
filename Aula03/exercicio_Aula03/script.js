for(let i = 0; i<=20;i=i+1){
  if(i%2 ===0){
    console.log(`${i} é par!`)
  }
}

let button = document.getElementById("vejaOsPares");

button.addEventListener("click", vejaOsPares);

function vejaOsPares(){
  let resultadoDiv = document.getElementById("resultadoDiv");
  let pElements = document.getElementsByTagName("p");
  // como inserir um elemento com algum parametro especifico como o id?
  if(pElements.length !== 0){
    Object.entries(pElements).forEach(element => {
      const [postion, htmlElement]=element;
      resultadoDiv.removeChild(htmlElement);
    });
  };

  let input = document.getElementById("numberInput");
  let number = input.value; 

  for(let i = 0; i<=number;i=i+1){
    if(i%2 ===0){
      let createP = document.createElement("p");
      let texto = document.createTextNode(`${i} é par!`);
      createP.appendChild(texto);
      resultadoDiv.appendChild(createP);
    }
  }
}