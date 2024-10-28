
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
        const data = {
          title: 'PRUEBA',
          message: 'ESTA NO ES VERSION FINAL, ES UNA PRUEBA',
          items: ['Elemento 1', 'Elemento 2', 'Elemento 3']
        };
        res.render('home', data); // Renderiza 'index.ejs' con los datos
      });

app.get('/catalog', (req, res) => {
    res.render('page2');
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

