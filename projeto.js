//Fazer um programa que diga se um número é par ou ímpar

//Qual a diferença entre um número par e um número ímpar?

function parOuImpar(numero){
    let resto = numero % 2;

    if(resto == 0){
        console.log("O número é par!");
    }else{
        console.log("O número é ímpar!");
    }
}

function soma(a, b){
    return a+b;
}

function subtracao(a,b){
    return a - b;
}

module.exports = {parOuImpar, soma, subtracao};