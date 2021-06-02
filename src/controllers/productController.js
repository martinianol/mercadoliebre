const path = require('path');
const viewsPath = path.resolve(__dirname, '../views/products');

const controlador = {
  //pagina detalle
  detail: (req, res) => {
    let id = req.params.id;
    res.render(path.resolve(viewsPath, 'productDetail.ejs'));
  },
  //pagina para ver edicion de producto
  edit: (req, res) => {
    res.render(path.resolve(viewsPath, 'productEdit.ejs'));
  },
};

module.exports = controlador;
