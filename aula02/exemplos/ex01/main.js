const botao = document.getElementById("meuBotao");
const botao2 = document.getElementById("meuBotao2");
let contador = 0;

function alterarTexto(){
  const content = document.getElementById("content");
  content.textContent = "Olá mundo";
  contador++;
  botao.innerHTML = `Clique aqui, (${contador})`;
}   

function alterarTexto2(){
   const content = document.getElementById("content");
     content.textContent = "Mudou aqui";
}

botao.addEventListener("click",alterarTexto); 
botao2.addEventListener("click", alterarTexto2)
       
    