const express = require('express');
const cors = require('cors');

//varibles
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/crud', require('./routes/crud.routes'));

//open server
app.listen(PORT, () => {
  console.log('El servidor se esta ejecutando en el puerto ' + PORT);
});