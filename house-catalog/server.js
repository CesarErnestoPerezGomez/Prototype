const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const userModel = require('./src/models/users')
const bodyParser = require('body-parser');
const HouseModel  = require('./src/models/houses')
const app = express();
app.use(cors());
app.use(express.json());  // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Configuration
 const mongoDBUrl1 = `mongodb+srv://alfred:ipp3qfOhGJ5xaPdF@cluster0.2f8ph.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0`;
 const mongoDBUrl2 = `mongodb+srv://alfred:ipp3qfOhGJ5xaPdF@cluster0.2f8ph.mongodb.net/real_estate?retryWrites=true&w=majority&appName=Cluster0`;


/* mongoose.connect(mongoDBUrl1)   // REVISAR LA CONEXION A LA DB
  .then(() => console.log('Conexion establecida con la base de datos users'))
  .catch(err => console.log('Error connecting to MongoDB', err)); 
*/
  
mongoose.connect(mongoDBUrl2)   // REVISAR LA CONEXION A LA DB
.then(() => console.log('Conexion establecida con la base de datos real_estate'))
.catch(err => console.log('Error connecting to MongoDB', err)); 


 

app.get('/catalog', (req, res) => {
  HouseModel.find()
  .then(houses => res.json(houses))
  .catch(err => res.json(err))
})
/*

// API Endpoint for Search
app.get('/api/search', (req, res) => {
  const address = req.query.address;
  // Example data (in a real app, fetch from MongoDB)
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];

  const filteredHouses = Houses.filter(house =>
    house.city.toLowerCase().includes(address.toLowerCase()) ||
    house.zipCode.includes(address) ||
    house.name.toLowerCase().includes(address.toLowerCase())
  );

  res.json(filteredHouses.length > 0 ? filteredHouses : { message: 'No houses found' });
});

// API Endpoint for Catalog
app.get('/api/catalog', (req, res) => {
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];
  res.json(Houses);
});

// API Endpoint for House Details
app.get('/api/house/:zipCode', (req, res) => {
  const zipCode = req.params.zipCode;
  const Houses = [
    {
      city: "Zapopan",
      zipCode: "43221",
      price: 245000,
      name: "Modern Villa",
      imageurl: "/pics/casa5.jpeg",
    },
    {
      city: "Tlaquepaque",
      zipCode: "43243",
      price: 450500,
      name: "Cozy Cottage",
      imageurl: "/pics/casa4.jpeg",
    },
    {
      city: "Tonala",
      zipCode: "43256",
      price: 434000,
      name: "Urban Apartment",
      imageurl: "/pics/casa3.jpeg",
    }
  ];

  const house = Houses.find(h => h.zipCode === zipCode);
  if (house) {
    res.json(house);
  } else {
    res.status(404).json({ error: 'House not found' });
  }
});*/

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


// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
