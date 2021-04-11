export class Telefono {
  //Atributos de la clase Telefono
  Tipo: string;
  Numero: number;

  // Constructor de la clase Telefono
  constructor(tipo: string, numero: number){
    this.Tipo = tipo;
    this.Numero = numero;
  }

  // Getters y setters de la clase Telefono
  public getTipo(): string{
    return this.Tipo;
  }

  public setTipo(tipo: string){
    this.Tipo = tipo;
  }

  public getNumero(): number{
    return this.Numero;
  }

  public setNumero(numero: number): void{
    this.Numero = numero;
  }

  // Método toString de la clase Telefono
  public toString(): String{
    return "Tipo: " + this.Tipo + " nº: " + this.Numero;
  }
}