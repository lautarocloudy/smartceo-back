const Interaccion = require('../modelo/Interaccion');
const Cliente = require('../modelo/Clientes');


const crearInteraccion = (req, res) => {

    //recoger todos los datos de post
    let parametros = req.body;

    //crear el objeto a guardar
    const interaccion = new Interaccion(parametros);

    //guardar articulo en la base de datos
    interaccion.save((error, interaccionGuardado) => {

        if (error || !interaccionGuardado) {
            return res.status(400).json({
                status: "error",
                mensaje: 'no se ha guardado'
            });
        }

        //devolver el resultado
        return res.status(200).json({
            status: 'success',
            mensaje: 'se ha guardado la informacion',
            interaccionGuardado
        });
    })

}


// Función para actualizar una interacción
async function actualizarInteraccion(idInteraccion, datosActualizados) {
    try {
        const interaccion = await Interaccion.findByIdAndUpdate(
            idInteraccion,
            datosActualizados,
            { new: true } // Devuelve el documento actualizado
        );

        if (!interaccion) {
            throw new Error('Interacción no encontrada');
        }

        console.log('Interacción actualizada:', interaccion);

        return {
            status: 'success',
            mensaje: 'Interacción actualizada correctamente',
            interaccion,
        };
    } catch (error) {
        console.error('Error actualizando la interacción:', error.message);
        throw error;
    }
}

// Función para obtener todas las interacciones
async function obtenerTodasInteracciones() {
    try {
        const interacciones = await Interaccion.find().sort({ createdAt: -1 });
        console.log('Todas las interacciones:', interacciones);

        return {
            status: 'success',
            interacciones,
        };
    } catch (error) {
        console.error('Error al obtener todas las interacciones:', error.message);
        throw error;
    }
}

// Función para buscar interacciones de un cliente específico
async function buscarInteraccionesCliente(criterio) {
    try {
        let cliente;

        if (criterio.id) {
            cliente = await Cliente.findById(criterio.id);
        } else if (criterio.nombre) {
            cliente = await Cliente.findOne({ nombre: criterio.nombre });
        }

        if (!cliente) {
            throw new Error('Cliente no encontrado');
        }

        const interacciones = await Interaccion.find({ clienteId: cliente._id }).sort({ createdAt: -1 });
        console.log(`Interacciones del cliente ${cliente.nombre}:`, interacciones);

        return {
            status: 'success',
            interacciones,
        };
    } catch (error) {
        console.error('Error buscando interacciones del cliente:', error.message);
        throw error;
    }
}

module.exports = {
    crearInteraccion,
    actualizarInteraccion,
    obtenerTodasInteracciones,
    buscarInteraccionesCliente,
};
