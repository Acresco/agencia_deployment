/**const Viaje = require('../models/Viajes');*/
const Testimonial = require('../models/Testimoniales');


exports.mostrarTestimoniales = async (req,res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    })
}


exports.agregarTestimonial = async (req, res) => {
    // Validar que todos los campos estén llenos
    let {nombre, email, mensaje} = req.body;
    
    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu nombre'})
    }
    if(!email) {
        errores.push({'mensaje': 'Agrega tu correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Por favor, escribe un comentario para continuar ;)'})
    }

    // Revisar por errores
    if(errores.length > 0) {
        // muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else {
        // almacenarlo en la DB
        Testimonial.create({
            nombre,
            email,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }

}