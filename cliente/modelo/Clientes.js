const {Schema, model} = require('mongoose');

const ClientesSchema = Schema({
    rubro: { type: String },
    nombre: { type: String },
    telefono: { type: String },
    email: { type: String },
    direccion:{ type: String},
    empresa:{ type: String},
    banco1:{ type: String},
    cbu1: { type: String },
    cuentaCorriente1: { type: String },
    banco2:{ type: String},
    cbu2: { type: String },
    cuentaCorriente2: { type: String },
    banco3:{ type: String},
    cbu3: { type: String },
    cuentaCorriente3: { type: String },
    billeteraVirtual: { type: String },
    cvu: { type: String },
    cuit:{ type: String},
    organismo:{ type: String},
    provincia:{ type: String},
    legajo:{ type: String},
    situcion:{ type: String},
    tramite:{ type: String},

});


module.exports= model("Cliente", ClientesSchema, "Clientes") 