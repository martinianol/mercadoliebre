const path = require('path')
const viewsPath = path.resolve(__dirname, '../views/');

const controlador = {
    index: (req,res) => {
        res.sendFile(path.resolve(viewsPath, 'home.html'));
    }, //pagina principal
    login: (req,res) => {
        res.sendFile(path.resolve(viewsPath, 'login.html'));
    }, //pagina login
    register: (req,res) => {
        res.sendFile(path.resolve(viewsPath, 'register.html'));
    } //pagina registro
};

module.exports = controlador;
