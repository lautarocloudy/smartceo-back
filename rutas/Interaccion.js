const express = require('express');
const router = express.Router();
const InteraccionControlador = require('../cliente/controladores/Interaccion'); // Controlador de interacciones
const middlewares = require('../middlewares/auth'); // Middleware de autenticación

// Rutas de interacciones
router.post("/crear", middlewares.auth, InteraccionControlador.crearInteraccion); // Crear una interacción
router.put("/editar/:id", middlewares.auth, InteraccionControlador.actualizarInteraccion); // Actualizar una interacción
router.get("/listar", middlewares.auth, InteraccionControlador.obtenerTodasInteracciones); // Listar todas las interacciones
router.get("/cliente", middlewares.auth, InteraccionControlador.buscarInteraccionesCliente); // Buscar interacciones por cliente

module.exports = router;
