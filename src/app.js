

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const publicPath = path.resolve (__dirname, '../public');

const mainRoutes = require('./routes/main.js');

app.use(express.static(publicPath));

app.listen(port, () => console.log ('Server up and running on port 3000'));

app.set('view engine', 'ejs');
//app.set('vews','./views');

app.use('/', mainRoutes);
app.use('/registro', mainRoutes);
app.use('/login', mainRoutes);


