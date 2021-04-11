"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    // Constructor de la clase Persona
    constructor(nombre, apellidos, edad, dni, cumpleanyos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    getNombre() {
        return this.Nombre;
    }
    setNombre(nombre) {
        this.Nombre = nombre;
    }
    getApellidos() {
        return this.Apellidos;
    }
    setApellidos(apellidos) {
        this.Apellidos = apellidos;
    }
    getEdad() {
        return this.Edad;
    }
    setEdad(edad) {
        this.Edad = edad;
    }
    getDni() {
        return this.Dni;
    }
    setDni(dni) {
        this.Dni = dni;
    }
    getCumpleanyos() {
        return this.Cumpleanyos;
    }
    setCumpleanyos(cumpleanyos) {
        this.Cumpleanyos = cumpleanyos;
    }
    getColorFavorito() {
        return this.ColorFavorito;
    }
    setColorFavorito(colorFavorito) {
        this.ColorFavorito = colorFavorito;
    }
    getSexo() {
        return this.Sexo;
    }
    setSexo(sexo) {
        this.Sexo = sexo;
    }
    getDirecciones() {
        return this.Direcciones;
    }
    setDirecciones(direcciones) {
        this.Direcciones = direcciones;
    }
    getMails() {
        return this.Mails;
    }
    setMails(mails) {
        this.Mails = mails;
    }
    getTelefonos() {
        return this.Telefonos;
    }
    setTelefonos(telefonos) {
        this.Telefonos = telefonos;
    }
    getNotas() {
        return this.Notas;
    }
    setNotas(notas) {
        this.Notas = notas;
    }
    // Metodo para encontrar dentro de un array una persona con cierto DNI
    static getPersonaByDni(personas, dni) {
        return personas.find(persona => persona.Dni == dni);
    }
    static modificarDatos(personas, dni, nuevaDireccion, nuevoMails, nuevoTelefonos) {
        const persona = Persona.getPersonaByDni(personas, dni);
        // Si ha encontrado una persona modificamos sus datos
        if (persona != undefined) {
            persona.setDirecciones(nuevaDireccion);
            persona.setMails(nuevoMails);
            persona.setTelefonos(nuevoTelefonos);
        }
    }
    // Método toString de la clase Persona
    mostrarPersona() {
        console.log("Información personal: \nNombre y Apellidos: " + this.Nombre + " " + this.Apellidos + "\nEdad: " + this.Edad + "\nDni: "
            + this.Dni + "\nFecha de cumpleaños: " + this.Cumpleanyos + "\nColor favorito: " + this.ColorFavorito
            + "\nSexo: " + this.Sexo + "\nAnotaciones: " + this.Notas);
        let i = 1;
        for (const direccion of this.Direcciones) {
            console.log("\n\nInformación de la dirección " + i + ":\n" + direccion.toString());
            i++;
        }
        i = 1;
        for (const mail of this.Mails) {
            console.log("\n\nInformación del mail " + i + ":\n" + mail.toString());
            i++;
        }
        i = 1;
        for (const telefono of this.Telefonos) {
            console.log("\n\nInformación del teléfono " + i + ":\n" + telefono.toString());
            i++;
        }
        console.log("\n\nFin de la información\n\n");
    }
}
exports.Persona = Persona;
