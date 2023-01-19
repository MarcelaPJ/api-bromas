// EN ESTE ARCHIVO SE CREA EL MODELO QUE TENDRÁN LAS BROMAS EN LA BASE DE DATOS.

const { Schema, model } = require('mongoose');   // para importar mongoose. De moongoose requiero esquema y modelo.

const bromaSchema = new Schema({   // para comenzar a crear el esquema de las bromas.

    setup: {    // para crear el setup de la broma.
        type: String,
        required: [true, 'Debe ingresar el setup de la broma.'],    // para que sea requerido. Si se deja en blanco arroja el mensaje.
        minlength: [10, 'El setup no puede tener menos 10 caracteres.']   // para que el setup no tenga menos de 10 caracteres. Si tiene menos arroja el mensaje.
    },
    punchline: {    // para crear el punchline (remate) de la broma.
        type: String,
        required: [true, 'Debe ingresar el punchline de la broma.'],    // para que sea requerido. Si se deja en blanco arroja el mensaje.
        minlength: [3, 'El punchline no puede tener menos 3 caracteres.']   // para que el punchline no tenga menos de 3 caracteres. Si tiene menos arroja el mensaje.
    }
}, { timestamps: true });   // para que se creen los timestamps de la broma.

const Broma = model('Broma', bromaSchema);   // para crear el modelo de las bromas y exportarlo
    module.exports = Broma;   