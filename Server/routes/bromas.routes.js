// ESTE ARCHIVO ES EL QUE SE ENCARGA DE CREAR LAS RUTAS DE LAS BROMAS.

const { getAllBromas, createBroma, updateBroma, deleteBroma, getOneBroma } = require('../controllers/bromas.controllers');   // para importar las funciones de los controllers.

module.exports = app => {                   // para crear y exportar las rutas de las bromas.
//especificar el método y dentro () se especifica la ruta que tendra la api 
//y luego se llama a la funcion que se encuentra en controllers.
    app.get( '/api/bromas' , getAllBromas );   // para obtener todas las bromas.
    app.get( '/api/bromas/:id' , getOneBroma );    // para obtener una broma con el id.
    app.post( '/api/bromas' , createBroma );   // para crear una broma.
    app.put( '/api/bromas/:id' , updateBroma );    // para actualizar una broma con el id.
    app.delete( '/api/bromas/:id' , deleteBroma ); // para eliminar una broma con el id.
}

