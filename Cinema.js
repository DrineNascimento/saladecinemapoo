"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var readline = require('readline-sync');
var Cinema = /** @class */ (function () {
    function Cinema(cadeiras, qtd) {
        this.cadeiras = cadeiras;
        this.qtd = qtd;
    }
    Cinema.prototype.getCadeiras = function () {
        return this.cadeiras;
    };
    Cinema.prototype.setCadeiras = function (cadeiras) {
        this.cadeiras = cadeiras;
    };
    Cinema.prototype.mostrar = function () {
        var resposta = "";
        resposta += "[";
        for (var i = 0; i < this.qtd; i++) { //undefined == vazio
            if (this.cadeiras[i] != undefined) { //Se a cadeira estiver ocupada 
                resposta += this.cadeiras[i].toString() + " ";
            }
            else { // Se a cadeira estiver vazia
                resposta += "-" + " ";
            }
        }
        resposta += "]";
        return resposta;
    };
    Cinema.prototype.reservar = function (id, telefone, pedido) {
        if ((pedido < 0 || pedido >= this.qtd)) {
            console.log("Indisponivel");
            return;
        }
        if ((this.cadeiras[pedido] != undefined)) {
            console.log("Cadeira ocupada");
            return;
        }
        for (var i = 0; i < this.qtd; i++) {
            if ((this.cadeiras[i] != undefined) && (this.cadeiras[i].getId() == id)) {
                console.log("Cliente ja reservou cadeira");
                return;
            }
        }
        this.cadeiras[pedido] = new Cliente_1.Cliente(id, telefone);
    };
    Cinema.prototype.cancelar = function (id) {
        for (var i = 0; i < this.qtd; i++) {
            if ((this.cadeiras[i] != undefined) && (this.cadeiras[i].getId() == id)) {
                this.cadeiras[i] = undefined;
                return;
            }
        }
        console.log("Pedido cancelado");
    };
    return Cinema;
}());
exports.Cinema = Cinema;
