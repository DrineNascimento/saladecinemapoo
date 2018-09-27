"use strict";
exports.__esModule = true;
var Cinema_1 = require("./Cinema");
var readline = require('readline-sync');
var cine = new Cinema_1.Cinema([], 0);
var opcao;
while (true) {
    opcao = readline.question("______________ESCOLHA UMA OPÇAO______________\n \n 1 - INICIAR O CINEMA \n 2- Localização das cadeiras \n 3- Reservar uma cadeira \n 4- Cancelar uma cadeira \n");
    if (opcao == "1") {
        var qtd = parseInt(readline.question("Digite a quantidade: " + "\n"));
        cine = new Cinema_1.Cinema([], qtd);
    }
    if (opcao == "2") {
        console.log(cine.mostrar());
    }
    if (opcao == "3") {
        var id = readline.question("Digite o id: " + "\n");
        var telefone = parseInt(readline.question("Digite seu telefone: " + "\n"));
        var numCadeira = parseInt(readline.question("Digite a cadeira desejada: " + "\n"));
        cine.reservar(id, telefone, numCadeira);
    }
    if (opcao == "4") {
        var idAtual = readline.question("Digite seu ID: " + "\n");
        cine.cancelar(idAtual);
    }
}
