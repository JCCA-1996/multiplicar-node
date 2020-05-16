// requires
// Existen 3 tipos de requires proeycto propio de node.
// Paquete que se intala, que no son nativos de node, códigos que hicieron otras personas.
// Archivos que creamos en el proyecto()
// const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==============================='.black);
    console.log(`*Lista Tabla del ${base} con LIMIT ${limite}*`.black);
    console.log('==============================='.black);
    for (let i = 1; i <= limite; i++) {
        console.log(`   ${base} * ${i} = ${base * i}\n`);
    }
    console.log('==============================='.black);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            resolve(`El valor ingresado ${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`multiplicar/../tablas/Archivo-tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`Archivo-tabla-${base}-al-${limite}.txt`.gray);
        });

    }, (err) => console.log(err));
}

// Objeto global que estará disponible a lo largo de la app,
// se agregan los elementos a utilizar de forma global.
module.exports = {
    crearArchivo,
    listarTabla
}
 