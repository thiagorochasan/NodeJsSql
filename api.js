const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Obras = require('./Obras');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use(( request, response, next) => {
    console.log('middleware');
    next();
})

router.route('/obras').get((request, response) => {
    dboperations.getObras().then( result => {
        //console.log(result);
        response.json(result[0]);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Api está rodando na porta ' + port);


