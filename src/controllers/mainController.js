const path = require('path');
const viewsPath = path.resolve(__dirname, '../views/');

const controlador = {
  //pagina login
  home: (req, res) => {
    res.render(path.resolve(viewsPath, 'home.ejs'));
  },
  //pagina login
  login: (req, res) => {
    res.render(path.resolve(viewsPath, 'login.ejs'));
  },
  //pagina registro
  register: (req, res) => {
    res.render(path.resolve(viewsPath, 'register.ejs'));
  },
};

module.exports = controlador;
