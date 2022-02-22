function gerarTemperaturaAleatoria() {

    let sinal = Math.random();
    let temperatura;

    if (sinal > 0.5)
        temperatura = Math.floor(Math.random() * 5);
    else
        temperatura = Math.floor(Math.random() * (-5));

//FIRA CODE

    if (temperatura <= -5)
        console.log("A temperatura está normal! - " + temperatura);
    else if (temperatura > -5 && temperatura < 0)
        console.log("Cuidado! A temperatura está subindo! - " + temperatura)
    else
        console.log("A temperatura é crítica - " + temperatura);



}

//Criar a ideia de um sensor que lê a temperatura periodiodicamente

setInterval(gerarTemperaturaAleatoria, 10000);