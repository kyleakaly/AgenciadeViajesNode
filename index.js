import  express from 'express';
import  route  from './routes/index.js';
import db from './config/db.js';

const app = express();



//conectar la base de datos
db.authenticate().then(()=>{
    console.log('base de datos conectada')
}).then(error=>{
    console.log(error)
})
// definir puerto
const port = process.env.PORT || 4000;

// agregar router
// use es un comando general que abarca todo put patch get delete 

app.set('view engine', 'pug');

//obtener el ano actual
//app.use()utiliza y se actualiza en todos los metodos put patch delete get post
app.use((req,res,next)=>{
const year = new Date();
res.locals.actualYear = year.getFullYear();
res.locals.nombresition = 'agencia de viajes'
//una forma de obligar a next a que funcione cuando se queda atascado

 return next();
});

// agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended: true}));


app.use('/', route)


// definir la carpeta publica
app.use(express.static('public'));



app.listen(port,()=>{
    console.log(`el servidor esta funcionando en el puerto ${port}`)
}) 




