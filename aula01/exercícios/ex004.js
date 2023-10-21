let n1 = 10;
let n2 = 5;
let n3 = 8;

if(n1>n2 && n1>n3 && n2>n3 ){
    console.log(n1, n2, n3);
} else if (n1>n2 && n1>n3 && n3>n2){
    console.log(n1, n3, n2);
} else if(n2>n1 && n2>n3 && n1>n3){
    console.log(n2, n1, n3);
} else if (n2>n1 && n2>n3 && n3>n1){
    console.log(n2, n3, n1);
} else if (n3>n1 && n3>n2 && n1>n2){
    console.log(n3, n1, n2);
} else if (n3>n1 && n3>n2 && n2>n1){
    console.log(n3, n2, n1);
}