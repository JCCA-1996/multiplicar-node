// DATO:
// Después de la definición con un const o un let viene {}
// significa que es una destructuración.

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const  argv  = require('./config/yargs.js').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}







//-----------------------------------------------------------------------
// Process: Variable de entorno, objeto.
//console.log(process.argv);

//let argv2 = process.argv;
//console.log('Limite',argv.limite);

//let parametro = argv[2];
//Split: es para separar elementos, para convertir 
//       de un String a arreglos.
//let base = parametro.split('=')[1];


