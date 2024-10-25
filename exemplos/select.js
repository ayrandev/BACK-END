const UserAccessModel = require ("./criando-model");

async function execute() {
    //SELECT * FROM store.user_access WHERE id = 2
    let resultado = await UserAccessModel.findAll({
        where: {
            id: 2
        }
        //attributes: ['id', 'email']
    });
    console.log(resultado);
}

execute();
