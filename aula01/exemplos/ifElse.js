let aluno = "Maria"
let nota1 = 10;
let nota2 = 6;
let nota3 = 4.5;
let nota4 = 7;
let media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("A média do aluno " + aluno + " é " + media.toFixed(2));

if(media>=6){
    console.log("O aluno foi aprovado!")
} else if (media<6){
    console.log("O aluno não foi aprovado!")
}