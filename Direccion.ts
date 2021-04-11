import{Provincia} from './Provincia';

export class Direccion {
  //Atributos de la clase Direccion
  Calle: string;
  Numero: number;
  Piso: number;
  Letra: string;
  CodigoPostal: number;
  Poblacion: string;
  Provincia: Provincia;

  // Constructor de la clase Direccion
  constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: Provincia) {
    this.Calle = calle;
    this.Numero = numero;
    this.Piso = piso ;
    this.Letra = letra;
    this.CodigoPostal = codigoPostal;
    this.Poblacion = poblacion ;
    this.Provincia = provincia;
  }

  // Getters y setters de la clase Direccion
  public getCalle(): string{
    return this.Calle;
  }

  public setCalle(calle: string): void{
    this.Calle = calle;
  }

  public getNumero(): number{
    return this.Numero;
  }

  public setNumero(numero: number): void{
    this.Numero = numero;
  }

  public getPiso(): number{
    return this.Piso;
  }

  public setPiso(piso: number): void{
    this.Numero = piso;
  }

  public getLetra(): string{
    return this.Letra;
  }

  public setLetra(letra: string): void{
    this.Letra = letra;
  }

  public getCodigoPostal(): number{
    return this.CodigoPostal;
  }

  public setCodigoPostal(codigoPostal: number): void{
    this.CodigoPostal = codigoPostal;
  }

  public getPoblacion(): string{
    return this.Poblacion;
  }
  
  public setPoblacion(poblacion: string): void{
    this.Poblacion = poblacion;
  }

  public getProvincia(): Provincia{
    return this.Provincia;
  }
  
  public setProvincia(provincia: Provincia): void{
    this.Provincia = provincia;
  }

  // Método toString de la clase Direccion
  public toString(): String{
      return "Calle: " + this.Calle + " nº " + this.Numero + ", " + this.Piso + 
      " " + this.Letra + "\nCP: " + this.CodigoPostal + ", " + this.Poblacion + ", " + this.Provincia;
  }
 
}