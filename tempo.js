//Gerar um número aleatório no Javascript
//E se eu quiser que o número seja de 1 a 100?
//Vetores 

function gerarNumeroAleatorio(){
    setInterval(function(){
        let numero = Math.ceil(Math.random()*100);
        console.log(numero);
    }, 1000);
}

gerarNumeroAleatorio();

