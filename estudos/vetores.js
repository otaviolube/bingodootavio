let vetor = [1,2,3,4,5]

let numero = 10

let nome = "otavio"

let soma = function(a, b){
    return a+b;
}

vetor.push(numero)
vetor.push(nome)
vetor.push(soma)

console.log(vetor);

vetor.pop();
vetor.pop();

//Índice do vetor
console.log(vetor[3]);

//Vetor = Array

vetor.forEach((e) => {
    console.log(e)
})