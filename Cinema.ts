import{Cliente} from "./Cliente";
declare function require(msg: string): any;
var readline = require('readline-sync');

export class Cinema{
    private cadeiras: Array<Cliente>;
    private qtd : number;
    

    constructor(cadeiras: Array<Cliente>, qtd: number){
        this.cadeiras = cadeiras;
        this.qtd = qtd;
    }

    public getCadeiras(): Array<Cliente>{
        return this.cadeiras;
    }

    public setCadeiras(cadeiras: Array<Cliente>){
        this.cadeiras = cadeiras;
    }

    public mostrar(): string{
        let resposta: string = "";
        resposta += "[";
        for(let i = 0; i < this.qtd; i++){     //undefined == vazio
            if(this.cadeiras[i] != undefined){ //Se a cadeira estiver ocupada 
                resposta += this.cadeiras[i].toString() + " ";
            }else{  // Se a cadeira estiver vazia
                resposta += "-" + " ";
            }
        }
        resposta += "]";
        return resposta;
    }

    public reservar(id: string, telefone: number, pedido: number): boolean{


        if((pedido < 0 || pedido >= this.qtd)){
            console.log("Indisponivel");
            return;
        } 
        if ((this.cadeiras[pedido] != undefined)){
            console.log("Cadeira ocupada");
            return;
        }

        for(let i = 0; i < this.qtd ; i++){
            if((this.cadeiras[i] != undefined) && (this.cadeiras[i].getId() == id)){
                console.log("Cliente ja reservou cadeira");
                return;
            }        
        }
        
        this.cadeiras[pedido] = new Cliente(id, telefone);
    }

    public cancelar(id: string): boolean{
        for(let i = 0; i < this.qtd; i++){
            if((this.cadeiras[i] != undefined) && (this.cadeiras[i].getId() == id)){ 
                this.cadeiras[i] = undefined;
                return;
            }
        }
        console.log("Pedido cancelado");
    }





}