const { Schema, model } = require('mongoose');

// Definición del esquema para las interacciones
const InteraccionSchema = Schema({
    clienteId: { type: Date, default: Date.now, required: true },
    fechaInteraccion: { type: Date, default: Date.now }, // Fecha de la interacción
    tipo: { type: String }, // Tipo de interacción (ej. llamada, email, etc.)
    descripcion: { type: String }, // Descripción de la interacción
    derivar: { type: String }, // Si se deriva a otra persona/departamento
    tiempoSolucion: { type: String }, // Tiempo estimado o real de solución
    responsable: { type: String }, // Persona responsable de la interacción
    seguimiento: { type: String }, // Detalles de seguimiento
    accionRealizar: { type: String }, // Acción a realizar tras la interacción
    respuesta: { type: String }, // Respuesta obtenida en la interacción
    fechaSeguimiento: { type: Date }, // Fecha para el seguimiento
}, { timestamps: true }); // Timestamps para 'createdAt' y 'updatedAt'

// Exportar el modelo
module.exports = model('Interaccion', InteraccionSchema, 'Interacciones');
