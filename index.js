const sql = require('mssql');

var config = {
    server:"banco.filleasy.com.br",
    database:"XXXTESTEDB",
    driver: "msnodesqlv8",
    user:"flt",
    password:"F@10537easy",
    options:{
        //trustedConnection: true
        trustServerCertificate: true
    }
}

// const connection = async () => {
//     try {

//         const promise = await sql.connect(config);
//         const result = await sql.query('select * from cadObras_Cidades');
//         console.log(result);
        
//     } catch (err) {
//         console.log(err);
//     }
// }


sql.connect(config, function (err){
    if (err){
        console.log(err);
    }

    var request = new sql.Request();

    request.query("Select * from cadObras_Cidades", function (err, records){
        if (err){
            console.log(err);
        }else{
            console.log(records);
        }
    })

})