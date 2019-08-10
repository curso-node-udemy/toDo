const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
}

const completado = {
  alias: 'c',
  type: 'boolean',
  desc: 'Parca como completada o pendiente la tarea'
}

const { argv } = require('yargs')
  .command('crear', 'Crea un nuevo elemento para la lista', { descripcion })
  .command('actualizar', 'Actualiza un elemento de la lista', { descripcion, completado })
  .command('listar', 'Muestra todos los elementos de la lista', { completado })
  .command('borrar', 'Elimina un elemento de la lista', { descripcion })

module.exports = { argv };