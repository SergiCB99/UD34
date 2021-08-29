
var dado1 = 0;
var dado2 = 0;
var suma = 0;
var resultados = [];

for(var i=0;i<36000;i++){
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;

    suma = dado1+dado2;

    resultados.push(suma);
}

console.log(resultados);