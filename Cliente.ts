export class Cliente{
    private id: string;
    private telefone: number;

    public constructor(id: string, telefone: number){
        this.id = id;
        this.telefone = telefone;
    }

    public toString(): string{
        let res: string = "";
        res += this.id + ":";
        res += this.telefone;
        return res;
    }

    public getId(): string{
        return this.id;    
    }

    public setId(id: string): void{
        this.id = id;
    }

    public getTelefone(): number{
        return this.telefone;
    }

    public setTelefone(telefone: number): void{
        this.telefone = telefone;
    }
}