import {testimoniales} from '../models/testimoniales.js'


const guardarTestimonial = async (req, res) =>{
 //req.body va a hacer lo que el usuario coloque en este formulario con req.body se podra ver

 //validar..
 const {nombre,correo,mensaje} = req.body

 const errores = [];

 if(nombre.trim() === ''){
    errores.push({mensaje:'el nombre estA vacio'});
 }

 if(correo.trim() === ''){
    errores.push({mensaje:'el correo estA vacio'});
 }

 if(mensaje.trim() === ''){
    errores.push({mensaje:'el mensaje estA vacio'});
 }
 //en express existe algo llamado express validator es importante como hacerlo
if(errores.length > 0){

   const testimonialess = await testimoniales.findAll();

   //mostrar la vista con errores
   res.render('testimoniales',{

      //consultar  testimoniales existentes
      

      pagina:'testimoniales',
      errores,
      nombre,
      correo,
      mensaje,
      testimonialess
   })
}else{
   //Almacenarlo en la base de datos
try {
   await testimoniales.create({
      nombre,
      correo,
      mensaje
   });
   res.redirect('/testimoniales')
} catch (error) {
   console.log(error)
}

}
}

export{
    guardarTestimonial
}