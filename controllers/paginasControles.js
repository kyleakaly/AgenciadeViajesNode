
import { testimoniales } from "../models/testimoniales.js";
import { Viaje } from "../models/Viaje.js";


const paginaInicio = async (req, res)=>{

    //consultar 3 viajes del modelo viajje

    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit: 3}))
    promiseDB.push(testimoniales.findAll({limit: 3}))

    try {
        const resultado = await Promise.all(promiseDB)

        res.render('inicio',{
            pagina:'inicio',
            clase:'home',
            viajes: resultado[0],
            testimonialess:resultado[1]
           })
    } catch (error) {
        console.log(error)
    }
   
   
 
}

const paginaNosotros = (req, res)=>{
   
    res.render('nosotros',{
     pagina:'nosotros'
    })
 
}

const paginaViajes = async (req, res)=>{
   //onsultar
   const viajes = await Viaje.findAll();
    res.render('viajes',{
     pagina:'proximos viajes',
     viajes,
    })
 
}

const paginaTestimoniales = async (req, res)=>{
   
    try {

        const testimonialess = await testimoniales.findAll();

        res.render('testimoniales',{
            pagina:'testimoniales',
            testimonialess
           })

    
        
    } catch (error) {
        console.log(error)
    }

   
 
}


const paginaContact = (req, res)=>{
   
    res.render('contact',{
        pagina:'contact'
    })
 
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res)=>{
    const{ slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug}});
        res.render('viaje',{
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }

}

export{
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaContact,
    paginaDetalleViaje
}

