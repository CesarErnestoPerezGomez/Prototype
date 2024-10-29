require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Configuración de MongoDB
var user = process.env.DB_USER;
var password = process.env.DB_PASS;
var db = process.env.DB;

const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.2f8ph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

// Definición del esquema de casas
const houseSchema = new mongoose.Schema({
  address: String,
  price: Number,
  description: String,
  imageUrl: String,
  bedrooms: Number,
  bathrooms: Number,
  squareFeet: Number
});

const House = mongoose.model('House', houseSchema);

// Ruta para mostrar el formulario de inicio de sesión
app.get('/', (req, res) => {
    res.render('login'); // Renderiza el formulario de login en `login.ejs`
});

// Ruta para manejar la autenticación (POST) - Ahora acepta cualquier email y contraseña
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // No se valida el email y la contraseña, simplemente redirige al usuario a la página de inicio
    res.redirect('/home'); // Redirige a la página de inicio (`home.ejs`)
});
// Ruta para mostrar la página de inicio después de autenticarse
app.get('/home', (req, res) => {
    const data = {
        title: 'PRUEBA',
        message: 'ESTA NO ES VERSION FINAL, ES UNA PRUEBA',
        items: ['Elemento 1', 'Elemento 2', 'Elemento 3']
    };
    res.render('home', data); // Renderiza 'home.ejs' con los datos
});

// Rutas para el catálogo y los detalles de la casa
app.get('/catalog', (req, res) => {
    res.render('page2');
});

app.get('/house', (req, res) => {
    res.render('page3');
});

app.get('/services', (req, res) => {
    res.render('page4');
});

app.get('/house/:id', async (req, res) => {
    try {
        const houseId = req.params.id; // Obtener el ID de la casa desde la URL
        const house = await House.findById(houseId); // Buscar la casa por ID
        if (house) {
            res.render('page3', { house }); // Pasar los detalles de la casa a la vista
        } else {
            res.status(404).send("Casa no encontrada");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al buscar la casa");
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
