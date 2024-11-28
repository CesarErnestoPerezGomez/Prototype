const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const userModel = require('./src/models/users')
const bodyParser = require('body-parser');
const HouseModel  = require('./src/models/houses')
const ContactModel  = require('./src/models/forms')
const app = express();
app.use(cors());
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
  

app.post("/login", (req, res) => {
 const {email, password} = req.body;
 userModel.findOne({email: email})
 .then(user => {
  if(user) {
    if (user.password === password){
      res.json("Success")
    } else {
      res.json("the password is incorrect")
      }
     } else {
      res.json("No record existed")
     }
   })
})



app.post('/register', (req, res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))  
})

app.post('/contacts', (req, res)=>{
  ContactModel.create(req.body)
  .then(contacts => res.json(contacts))
  .catch(err => res.json(err))  
})

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

