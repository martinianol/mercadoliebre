const path = require('path')
const viewsPath = path.resolve(__dirname, '../views/');

const controlador = {
    home: (req,res) => {
        res.render(path.resolve(viewsPath, 'home.ejs'));
        
    }, //pagina principal
    login: (req,res) => {
        res.render(path.resolve(viewsPath, 'login.ejs'));
    }, //pagina login
    register: (req,res) => {
        res.render(path.resolve(viewsPath, 'register.ejs'));
    } //pagina registro
};

module.exports = controlador;
