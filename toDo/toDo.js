const fs = require ('fs')

let listToDo = [];

const guardarDatos = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('./db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo grabar', err);
  })
}

const cargarDatos = () => {
  try {
    listToDo = require('../db/data.json');
  }
  catch (error) {
    listToDo = [];
  }
}

const crear = (descripcion) => {
  if (listToDo.find(e => e.descripcion === descripcion)){
    return false;
  }
  let toDo = {
    descripcion,
    completado: false
  }
  listToDo.push(toDo);
  guardarDatos();
  return true;
}

const actualizar = (descripcion, completado = true) => {
  let index = listToDo.findIndex(e => e.descripcion = descripcion);
  if (index === -1) {
    return false;
  }
  listToDo[index].completado = completado;
  guardarDatos();
  return true;
}

const borrar = (descripcion) => {
  let index = listToDo.findIndex(e => e.descripcion = descripcion);
  if (index === -1) {
    return false;
  }
  listToDo.splice(index, 1);
  guardarDatos();
  return true;

}

const getListado = (completado) => {
  return completado === undefined
  ? listToDo
  : listToDo.filter(e => e.completado === completado);
}; 

module.exports = { crear, cargarDatos, getListado, actualizar, borrar }