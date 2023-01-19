// EN ESTE ARCHIVO SE SE PONE LA CONFIGURACIÓN DEL SERVIDOR Y SU LIBRERÍA MONGOOSE.

const { connect } = require('mongoose');   // para importar mongoose.

connect('mongodb://localhost/api_bromas_db', {   // para conectar mongoose con la base de datos.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then (() => console.log('La base de datos esta conectada.'))
    .catch (() => console.log('Hubo un error al conectar la base de datos.'));