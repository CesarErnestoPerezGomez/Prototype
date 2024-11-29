const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const userModel = require('./src/models/users')
const HouseModel  = require('./src/models/houses')
const ContactModel  = require('./src/models/forms')

const bodyParser = require('body-parser');
const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());  // Parse JSON data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// MongoDB Configuration
 const mongoDBUrl1 = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2f8ph.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0`;

 mongoose.connect(mongoDBUrl1)   // REVISAR LA CONEXION A LA DB
  .then(() => console.log('Conexion establecida con la base de datos de Atlas'))
  .catch(err => console.log('Error connecting to MongoDB', err)); 

  const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Log in to save houses' });
  
    jwt.verify(token, 'secret_key', (err, user) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.user = user;
      next();
    });
  };

  app.post('/save-house', authenticateToken, async (req, res) => {
    const { houseId } = req.body;
  
    try {
      const house = await HouseModel.findById(houseId);
      if (!house) return res.status(404).json({ error: 'House not found' });
  
      const user = await userModel.findById(req.user.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      if (user.savedHouses.includes(houseId)) {
        return res.status(400).json({ error: 'House already saved' });
      }
  
      user.savedHouses.push(houseId);
      await user.save();
  
      res.status(200).json({ message: 'House saved successfully', savedHouses: user.savedHouses });
    } catch (error) {
      res.status(500).json({ error: 'Error saving house', details: error });
    }
  });
  


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
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, 'secret_key');
  res.cookie('token', token, { httpOnly: true });
  res.json({ message: 'Logged in successfully' });
});




app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await userModel.create({ name, email, password: hashedPassword });
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

app.post('/contacts', (req, res)=>{
  ContactModel.create(req.body)
  .then(contacts => res.json(contacts))
  .catch(err => res.json(err))  
})

app.get('/profile', async (req, res) => {
  
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  try {
    const verified = jwt.verify(token, 'secret_key');
    const user = await userModel.findById(verified.id).populate('savedHouses');
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('token'); // Borra la cookie de autenticación
  res.status(200).json({ message: 'Logout successful' }); // Envía una respuesta de éxito
});


// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

