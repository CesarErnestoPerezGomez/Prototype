const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const userModel = require('./src/models/users')
const bodyParser = require('body-parser');
const HouseModel  = require('./src/models/houses')
const ContactModel  = require('./src/models/forms')
const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());  // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
require('dotenv').config();
    



// MongoDB Configuration
 const mongoDBUrl1 = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2f8ph.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0`;

 mongoose.connect(mongoDBUrl1)   // REVISAR LA CONEXION A LA DB
  .then(() => console.log('Conexion establecida con la base de datos de Atlas'))
  .catch(err => console.log('Error connecting to MongoDB', err)); 



app.get('/catalog', (req, res) => {
  HouseModel.find()
  .then(houses => res.json(houses))
  .catch(err => res.json(err))
})

app.get('/buy-a-house', (req, res) => {
  HouseModel.find()
  .then(houses => res.json(houses))
  .catch(err => res.json(err))
})


app.get('/rent-a-house', (req, res) => {
  HouseModel.find()
  .then(houses => res.json(houses))
  .catch(err => res.json(err))
})


app.get('/houses/:zipCode', async (req, res) => {
  try {
    const house = await HouseModel.findOne({ zipCode: req.params.zipCode }); 
    if (!house) {
      return res.status(404).json({ message: "Casa no encontrada" });
    }
    res.json(house);
  } catch (err) {
    console.error("Error al buscar la casa:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

app.get('/search', async (req, res) => {
  const { address } = req.query;

  try {
    // Realiza la búsqueda en la base de datos
    const houses = await HouseModel.find({
      $or: [
        { city: new RegExp(address, 'i') }, // Búsqueda insensible a mayúsculas/minúsculas
        { zipCode: address }, // Busca por código postal exacto
      ],
    });

    if (houses.length > 0) {
      res.status(200).json(houses); // Devuelve las casas encontradas
    } else {
      res.status(404).json({ message: 'No houses found' }); // Error 404 si no encuentra resultados
    }
  } catch (error) {
    res.status(500).json({ message: 'Error searching for houses', error }); // Error del servidor
  }
});
  

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Contraseña incorrecta' });

    req.session.user = user;
    res.json({ message: 'Inicio de sesión exitoso', user });
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});



app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'El correo ya está registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});


app.post('/contacts', (req, res)=>{
  ContactModel.create(req.body)
  .then(contacts => res.json(contacts))
  .catch(err => res.json(err))  
})


// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

