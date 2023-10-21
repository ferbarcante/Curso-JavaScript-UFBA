let alunos = new Array(
    "Maria",
    "Marcos",
    "Pedro",
    "Maria",
    "Ana",
    "Marcos"
)

let nomeProcurado = "Maria";
let contador = 0;

for(let i = 0; i<= alunos.length; i++){
    if(alunos[i] == nomeProcurado){
         contador++;
    }
}