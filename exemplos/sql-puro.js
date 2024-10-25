const connection = require('../src/database/connection')


//QUASE NUNCA USAMOS ESSA FUNÇÃO COM QUERY, SÓ EM ULTIMO CASO
async function execute() {
    let products = await connection.query("SELECT * FROM  product WHERE name like 'A%");
    console.log(products);
}
execute();