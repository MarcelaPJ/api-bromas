// ESTE ARCHIVO SE ENCARGA DE CREAR LAS FUNCIONES QUE SE EXPORTARÁN Y EJECUTARÁN CUANDO SE LLAME A LAS RUTAS
// DESDE BROMAS.ROUTES.JS 
// AQUÍ CREAMOS LOS MÉTODOS PARA UN CRUD, ES DECIR, PARA CREAR, LEER, ACTUALIZAR Y ELIMINAR.

const Broma = require('../models/bromas.model');   // se crea "Broma" para importar el modelo (esquema) de las bromas desde bromas.model.js

module.exports.getAllBromas = async (req, res) => {  // se crea la funcion getAllBromas (que será asincrona) para obtener todas las bromas. 
// dentro de los parentesis se pasan los parametros request y response, que son los que se usan en express. 
    try {   // se crea un try/catch para manejar los errores.
        const bromas = await Broma.find();    // se crea la constante bromas para, luego de esperar la búsqueda en la base de datos, obtener TODAS las bromas con el metodo find.
        res.json({  // Si está todo ok, debería arrojar un satus 200 y se enviará la respuesta en formato json.
            message: "Se obtuvieron exitosamente todas las bromas.",
            bromas,
        });   
    } catch (error) { // en caso de error, se ejecuta el catch.
        res.status(500).json({  // Error 500 es de servidor. Se envía la respuesta en formato json.
            message: "¡Oh no! No se pudieron obtener las bromas.",
            error,
        });
    }
}

module.exports.createBroma = async (req, res) => {
    try {
        const newBroma = await Broma.create(req.body);  // se crea la constante newBroma para, luego de esperar la creación en la base de datos, crear una nueva broma con el metodo create.
        res.json({
            message: "Se creó exitosamente la broma.",
            newBroma,
        })
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo crear la broma.",
            error,
        })
    }
}

module.exports.updateBroma = async (req, res) => {
    try {
        const { params, body } = req;  // se crea la constante params para obtener el id de la broma que se desea actualizar y body para obtener el contenido de la broma que se desea actualizar.
        const { id } = params;  // se crea la constante id para obtener el id (que sacamos de params) de la broma que se desea actualizar.
        
        const bromaUpdate = await Broma.findByIdAndUpdate(id, body, { new: true  });  // se crea la constante bromaUpdate para, luego de esperar la actualización en la base de datos, actualizar la broma con el metodo findByIdAndUpdate.
        //este método recibe el id y el body con la info que se desea actualizar, y el tercer parámetro (new:true) es para que devuelva la broma actualizada.
        res.json({
            message: "Se actualizó exitosamente la broma.",
            bromaUpdate,
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo actualizar la broma.",
            error,
        });
    }
}

module.exports.deleteBroma = async (req, res) => {
    try {
        const { id } = req.params;  // se crea la constante id para obtener el id (de req.params) de la broma que se desea eliminar.
        const removeBroma = await Broma.deleteOne({ _id: id });  // se crea la constante removeBroma para, luego de esperar la eliminación en la base de datos, eliminar la broma con el metodo deleteOne.
        // se usa guión bajo (_id) porque asi genera mongoose el id.
        res.json({
            message: "Se eliminó exitosamente la broma.",
            removeBroma,
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo eliminar la broma.",
            error,
        });
    }
}

module.exports.getOneBroma = async (req, res) => {
    try {
        const { id } = req.params;  // se crea la constante id para obtener el id (de req.params) de la broma que se desea obtener.
        const oneBroma = await Broma.findOne({ _id: id });
        res.json({
            message: "Se obtuvo exitosamente la broma.",
            oneBroma,
        });
    } catch(error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo obtener la broma.",
            error,
        });
    }
}