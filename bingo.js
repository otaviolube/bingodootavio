//Gerar um número aleatório entre 1 e 75
//min = 1
//max = 75

function gerarNumeroAleatorio(min, max){
    return Math.ceil(Math.random()*(max - min));
}

let cartela = [];
let pares = [];
let impares = [];

//Loop de repetição / laço de repetição
//FIRA CODE

for(let i = 0; i < 25; i++){
    let numeroAleatorio = gerarNumeroAleatorio(1,75);
    if(cartela.indexOf(numeroAleatorio) === -1){
        cartela.push(numeroAleatorio);
        if(numeroAleatorio%2 === 0){
            pares.push(numeroAleatorio);
        }else{
            impares.push(numeroAleatorio);
        }
    }

}

console.log("Cartela", cartela.sort(function(a,b){return a-b}));
// console.log("Números Pares", pares.sort(function(a,b){return a-b}));
// console.log("Números Ímpares", impares.sort(function(a,b){return a-b}));

let numerosSorteados = [];

function sorteio(){
    let intervalo = setInterval(function(){

        let numeroSorteado = gerarNumeroAleatorio(1,75);
        let numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;
        
        if(numeroExiste === false){
            numerosSorteados.push(numeroSorteado);
        }else{
            while(numeroExiste === true){
                numeroSorteado = gerarNumeroAleatorio(1,75);
                numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;
                if(numeroExiste === false){
                    numerosSorteados.push(numeroSorteado);
                }
            }
        }

        console.log("Números Sorteados", numerosSorteados);
        console.log("Tamanho", numerosSorteados.length);

        conferirCartela(intervalo);

        if(numerosSorteados.length === 75){
            clearInterval(intervalo);
        }

    }, 1000)
}

function conferirCartela(intervalo){
    if(numerosSorteados.length < 25)
        return false;
    
    let ganhouBingo = true;
    let quantidadeNumerosSorteados = 0;

    numerosSorteados.forEach(function(sorteado){
        cartela.forEach(function(meuNumero){
            if(sorteado == meuNumero){
                ganhouBingo = true;
                quantidadeNumerosSorteados++;
            }
        })
    })

    if(quantidadeNumerosSorteados == cartela.length){
        console.log("Parabéns! Você ganhou o bingo!");
        clearInterval(intervalo);
    }else{
        console.log("Você ainda não chegou lá! Faltam " + (cartela.length - quantidadeNumerosSorteados) + " números");
    }
}

sorteio();

//1 - gerar a cartela
//2 - geração dos números do sorteio
//3 - conferência da cartela