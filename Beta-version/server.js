require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose=require("mongoose");
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.engine("ejs", require("ejs").renderFile); 
app.set("view engine","ejs");

var user = process.env.DB_USER;
var password = process.env.DB_PASS;
var db = process.env.DB ;       

const mongoUrl = `mongodb+srv://${user}:${password}@cluster0.2f8ph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

  // Definir el esquema y el modelo
  

  const houseSchema = new mongoose.Schema({
      city: String,
      zipCode: String,
      price: Number,
      description: String,
      imageUrl: String,
      bedrooms: Number,
      bathrooms: Number,
      squareFeet: Number
  });
  
  const House = mongoose.model('House', houseSchema);
  module.exports = House;

  
app.get('/', (req, res) => {
        const data = {
          title: 'PRUEBA',
          message: 'ESTA NO ES VERSION FINAL, ES UNA PRUEBA',
          items: ['Elemento 1', 'Elemento 2', 'Elemento 3']
        };
        res.render('home', data); 
      });

  app.route('/search')
      .get((req, res) => {
        const address = req.query.address; 
        const Houses = [
          {
            "city": "Zapopan",
            "zipCode": "43221",
            "price": 245000,
            "name": "Modern Villa",
            "imageurl": "/pics/casa5.jpeg",
          },
          {
            "city": "Tlaquepaque",
            "zipCode": "43243",
            "price": 450500,
            "name": "Cozy Cottage",
            "imageurl": "/pics/casa4.jpeg",
          },
          {
            "city": "Tonala",
            "zipCode": "43256",
            "price": 434000,
            "name": "Urban Apartment",
            "imageurl": "/pics/casa3.jpeg",
          }
        ];
    
        let noHousesMessage = ''; // Inicializa el mensaje de no casas
    
        if (address) {
          // Filtrar las casas
          const filteredHouses = Houses.filter(house => 
            house.city.toLowerCase().includes(address.toLowerCase()) || 
            house.zipCode.includes(address) || 
            house.name.toLowerCase().includes(address.toLowerCase()) // Cambia description a name
          );
    
          // Verificar si no hay casas filtradas
          if (filteredHouses.length === 0) {
            noHousesMessage = 'No hay casas disponibles para la búsqueda realizada.';
          }
    
          res.render('page2', { Houses: filteredHouses, noHousesMessage,  address });
        } else {
          // Si no se ingresó ninguna dirección, se renderiza la página con todas las casas
          res.render('catalog', { Houses, noHousesMessage });
        }
      });
    
  
      

  app.get('/catalog', (req, res) => {
    // Datos de ejemplo de casas
    const Houses = [
      {
        "city": "Zapopan",
        "zipCode": "43221",
        "price": 245000,
        "name": "Modern Villa",
        "imageurl": "/pics/casa5.jpeg",
      },
      {
        "city": "Tlaquepaque",
        "zipCode": "43243",
        "price": 450500,
        "name": "Cozy Cottage",
        "imageurl": "/pics/casa4.jpeg",
      },
      {
        "city": "Tonala",
        "zipCode": "43256",
        "price": 434000,
        "name": "Urban Apartment",
        "imageurl": "/pics/casa3.jpeg",
      }
    ]
  
  res.render('catalog', { Houses });
});
    
      
app.get('/house', (req, res) => {
    res.render('page3');
      });

app.get('/services', (req, res) => {
    res.render('page4');
      });
      
  
app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});