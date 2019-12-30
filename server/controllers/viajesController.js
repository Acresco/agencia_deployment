const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
        res.render('viajes', {
            pagina: 'Próximos viajes',
            viajes
        });
}


exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje', {
            viaje
        });
}