export class Mail {
  //Atributos de la clase Mail
  Tipo: string;
  Direccion: string;

    // Constructor de la clase Mail
  constructor(tipo: string, direccion: string){
    this.Tipo = tipo;
    this.Direccion = direccion;
  }

  // Getters y setters de la clase Mail
  public getTipo(): string{
    return this.Tipo;
  }

  public setTipo(tipo: string): void{
    this.Tipo = tipo;
  }

  public getDireccion(): string{
    return this.Direccion;
  }

  public setDireccion(direccion: string): void{
    this.Direccion = direccion;
  }

  // Método toString de la clase Mail
  public toString(): String{
    return "Tipo: " + this.Tipo + " Dirección " + this.Direccion;
  }
}