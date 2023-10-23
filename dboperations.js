var config  = require('./dbconfig');
const sql = require('mssql');


async function getObras() {
    try {
        
        let pool = await sql.connect(config);
        let obras = pool.request().query("Select id_cidade, id_ugr,ds_nome,ds_descricao from cadObras_Cidades");

        return (await obras).recordsets;


    } catch (error) {

        console.log(error);
        
    }
}

module.exports = {
    getObras : getObras
}