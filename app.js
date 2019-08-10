const { argv } = require('./config/yargs');
require('colors');

const toDo = require('./toDo/toDo')

let comando = argv._[0];

toDo.cargarDatos();

switch (comando) {
  case 'crear':
    if (toDo.crear(argv.descripcion)) {
      console.log(`La tarea ${argv.descripcion} se ha creado correctamente`.green);
    } else {
      console.log(`La tarea ${argv.descripcion} ya existe`.red);
    }
    break;
  case 'listar':
    for (let tarea of toDo.getListado(argv.completado)) {
      console.log('=========================='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado ? 'Completada'.green: 'No Completada'.red);
    } 
    break;
  case 'actualizar':
    if (toDo.actualizar(argv.descripcion, argv.completado)) {
      console.log(`La tarea ${argv.descripcion} se ha actualizado correctamente`.green);
    } else {
      console.log(`Tarea ${argv.descripcion} no encontrada`.red);
    }
    break;
    case 'borrar':
        if (toDo.borrar(argv.descripcion)) {
          console.log(`La tarea ${argv.descripcion} se ha eliminado correctamente`.green);
        } else {
          console.log(`Tarea ${argv.descripcion} no encontrada`.red);
        }
        break;
  default:
    console.log('Comando no disponible'.red);
}