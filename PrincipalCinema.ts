
import {Cinema} from "./Cinema";

declare function require(msg: string): any;
var readline = require('readline-sync');

let cine: Cinema = new Cinema([],0);
let opcao: string;

while(true){
    opcao = readline.question("\n \n______________ESCOLHA UMA OPÇAO______________\n \n 1 - Inicializar o cinema \n 2- Localização das cadeiras \n 3- Reservar uma cadeira \n 4- Cancelar uma cadeira \n" );

    if(opcao == "1"){
        let qtd : number = parseInt(readline.question("Digite a quantidade: " + "\n"));
        cine = new Cinema([],qtd);
    }

    if(opcao == "2"){
        console.log(cine.mostrar());
    }
    if(opcao == "3"){
        let id : string = readline.question("Digite o id: " + "\n");
        let telefone : number = parseInt(readline.question("Digite seu telefone: " + "\n"));
        let numCadeira: number = parseInt(readline.question("Digite a cadeira desejada: " + "\n"));
        cine.reservar(id, telefone, numCadeira);     
    }

    if(opcao == "4"){
        let idAtual : string = readline.question("Digite seu ID: " + "\n");
        cine.cancelar(idAtual);
    } 


}

