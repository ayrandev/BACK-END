const ProdictModel = require('../models/ProductModel');
const ProdictImageModel = require('../models/ProductImageModel');

async function execute() {
    await ProdictModel.sync();
    await ProdictImageModel.sync();
}

execute();