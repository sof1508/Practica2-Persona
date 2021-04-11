import {Direccion} from './Direccion';
import {Mail} from './Mail';
import {Telefono} from './Telefono';
import{Sexo} from './Sexo';

export class Persona {
    //Atributos de la clase Persona
    private Nombre: string;
    private Apellidos: string;
    private Edad: number;
    private Dni: string
    private Cumpleanyos: Date;
    private ColorFavorito: string;
    private Sexo: Sexo;
    private Direcciones: Direccion[];
    private Mails: Mail[];
    private Telefonos: Telefono[];
    private Notas: string;

    // Constructor de la clase Persona
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanyos: Date, colorFavorito: string, sexo: Sexo, 
        direcciones: Direccion[], mails: Mail[], telefonos: Telefono[],  notas: string) {
        this.Nombre = nombre;
        this.Apellidos = apellidos;
        this.Edad = edad;
        this.Dni = dni;
        this.Cumpleanyos = cumpleanyos;
        this.ColorFavorito = colorFavorito;
        this.Sexo = sexo;
        this.Direcciones = direcciones;
        this.Mails = mails;
        this.Telefonos = telefonos;
        this.Notas = notas;
    }

    // Getters y setters de la clase Persona
    public getNombre(): string{
        return this.Nombre;
    }

    public setNombre(nombre: string): void{
        this.Nombre = nombre;
    }

    public getApellidos(): string{
        return this.Apellidos;
    }

    public setApellidos(apellidos: string): void{
        this.Apellidos = apellidos;
    }
    public getEdad(): number{
        return this.Edad;
    }

    public setEdad(edad: number): void{
        this.Edad = edad;
    }

    public getDni(): string{
        return this.Dni;
    }

    public setDni(dni: string): void{
        this.Dni = dni;
    }

    public getCumpleanyos(): Date{
        return this.Cumpleanyos;
    }

    public setCumpleanyos(cumpleanyos: Date): void{
        this.Cumpleanyos = cumpleanyos;
    }

    public getColorFavorito(): string{
        return this.ColorFavorito;
    }

    public setColorFavorito(colorFavorito: string): void{
        this.ColorFavorito = colorFavorito;
    }

    public getSexo(): Sexo{
        return this.Sexo;
    }

    public setSexo(sexo: Sexo): void{
        this.Sexo = sexo;
    }

    public getDirecciones(): Direccion[]{
        return this.Direcciones;
    }

    public setDirecciones(direcciones: Direccion[]): void{
        this.Direcciones = direcciones;
    }

    public getMails(): Mail[]{
        return this.Mails;
    }

    public setMails(mails: Mail[]): void{
        this.Mails = mails;
    }
    
    public getTelefonos(): Telefono[]{
        return this.Telefonos;
    }

    public setTelefonos(telefonos: Telefono[]): void{
        this.Telefonos = telefonos;
    }
   
    public getNotas(): string{
        return this.Notas;
    }

    public setNotas(notas: string): void{
        this.Notas = notas;
    }

    // Metodo para encontrar dentro de un array una persona con cierto DNI
    public static getPersonaByDni(personas: Persona[], dni: String): Persona | undefined{
        return personas.find(persona => persona.Dni == dni);      
    }

    public static modificarDatos(personas: Persona[], dni: String, nuevaDireccion: Direccion[], nuevoMails: Mail[], nuevoTelefonos: Telefono[]): void{
        const persona = Persona.getPersonaByDni(personas, dni);

        // Si ha encontrado una persona modificamos sus datos
        if(persona != undefined) {
            persona.setDirecciones(nuevaDireccion);
            persona.setMails(nuevoMails);
            persona.setTelefonos(nuevoTelefonos);
        }
    }

    // Método toString de la clase Persona
    public mostrarPersona(): void{

        console.log("Información personal: \nNombre y Apellidos: " + this.Nombre + " " + this.Apellidos + "\nEdad: " + this.Edad + "\nDni: " 
        + this.Dni + "\nFecha de cumpleaños: " + this.Cumpleanyos + "\nColor favorito: " + this.ColorFavorito 
        + "\nSexo: " + this.Sexo + "\nAnotaciones: " + this.Notas);
        
        let i = 1;
        for(const direccion of this.Direcciones){
            console.log("\n\nInformación de la dirección " + i + ":\n"+ direccion.toString());
             i++;
         }

        i = 1;
        for(const mail of this.Mails){
           console.log("\n\nInformación del mail " + i + ":\n"+ mail.toString());
            i++;
        }
        
        i = 1;
        for(const telefono of this.Telefonos){
            console.log("\n\nInformación del teléfono " + i + ":\n" + telefono.toString());
            i++;
        }
        console.log("\n\nFin de la información\n\n");
    
    }
    
}
