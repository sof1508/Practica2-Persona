"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Persona_1 = require("./Persona");
const Direccion_1 = require("./Direccion");
const Mail_1 = require("./Mail");
const Telefono_1 = require("./Telefono");
const Provincia_1 = require("./Provincia");
const Sexo_1 = require("./Sexo");
// Creación de direcciones
const direccion1 = new Direccion_1.Direccion("C/ Colón", 34, 4, "A", 46004, "Valencia", Provincia_1.Provincia.Valencia);
const direccion2 = new Direccion_1.Direccion("C/ Xàtiva", 16, 2, "B", 46004, "Valencia", Provincia_1.Provincia.Valencia);
const direccion3 = new Direccion_1.Direccion("C/ Blasco Ibánez", 15, 1, "C", 46004, "Valencia", Provincia_1.Provincia.Valencia);
// Creación de arrays agrupando diferentes mails
const direcciones1 = [direccion1, direccion2];
const direcciones2 = [direccion2];
const direcciones3 = [direccion3, direccion1];
// Creación de mails
const mail1 = new Mail_1.Mail("Gmail", "correo@gmail.com");
const mail2 = new Mail_1.Mail("Hotmail", "correo@hotmail.com");
const mail3 = new Mail_1.Mail("Yahoo mail", "correo@yahoo.com");
// Creación de arrays agrupando diferentes mails
const mails1 = [mail1];
const mails2 = [mail1, mail2];
const mails3 = [mail1, mail2, mail3];
// Creación de telefonos
const telefono1 = new Telefono_1.Telefono("Fijo", 999888777);
const telefono2 = new Telefono_1.Telefono("Móvil", 666555444);
const telefono3 = new Telefono_1.Telefono("Fijo", 333222111);
// Creación de arrays agrupando diferentes telefonos
const telefonos1 = [telefono1, telefono2, telefono3];
const telefonos2 = [telefono1, telefono2];
const telefonos3 = [telefono1];
// Creación de fechas de cumpleaños
const fecha1 = new Date(1985, 3, 5);
const fecha2 = new Date(1998, 1, 12);
const fecha3 = new Date(1976, 2, 25);
// Creación de tres tipos de personas
const persona1 = new Persona_1.Persona("Vicente", "Blasco Ibánez", 36, "12345678J", fecha1, "Amarillo", Sexo_1.Sexo.Masculino, direcciones1, mails1, telefonos1, "Varias notas 1");
const persona2 = new Persona_1.Persona("Isabel", "de Villena", 23, "23456789J", fecha2, "Rojo", Sexo_1.Sexo.Femenino, direcciones2, mails2, telefonos2, "Varias notas 2");
const persona3 = new Persona_1.Persona("Joaquín", "Sorolla", 45, "34567891J", fecha3, "Azul", Sexo_1.Sexo.X, direcciones3, mails3, telefonos3, "Varias notas 3");
// Creación de un array conteniendo a las diversas personas
const personas1 = [persona1, persona2, persona3];
// for para recorrer todas las personas del array para imprimirlas por consola
for (const persona of personas1) {
    persona.mostrarPersona();
}
//Modificación de una persona by DNI 
Persona_1.Persona.modificarDatos(personas1, "23456789J", direcciones1, mails3, telefonos1);
// for para recorrer todas las personas del array para imprimirlas por consola
for (const persona of personas1) {
    persona.mostrarPersona();
}
