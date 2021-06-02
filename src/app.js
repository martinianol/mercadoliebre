const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');

// Requiero el modulo con las rutas
const mainRoutes = require('./routes/main');
const usersRoutes = require('./routes/usersRoutes');

//Determino la carpeta de los archivos publicos para que puedan ser utilizados por Express
app.use(express.static(publicPath));

app.listen(port, () => console.log('Server up and running on port 3000'));

//le digo a Express que el motor de templates es EJS
app.set('view engine', 'ejs');

//Determino las rutas de las distintas direcciones a que controlador deben llamar
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
