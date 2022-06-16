import  express from 'express';
import { paginaInicio, paginaNosotros,paginaTestimoniales,paginaViajes,paginaContact,paginaDetalleViaje} from '../controllers/paginasControles.js';
import { guardarTestimonial } from '../controllers/testimonialControle.js';

const route = express.Router();


route.get('/', paginaInicio);
   


route.get('/nosotros', paginaNosotros)
   
   route.get('/viajes',paginaViajes)
   route.get('/viajes/:slug',paginaDetalleViaje)


route.get('/testimoniales',paginaTestimoniales)

//recibir datos de un formulario
route.post('/testimoniales',guardarTestimonial)

route.get('/contact',paginaContact)

   export default route



