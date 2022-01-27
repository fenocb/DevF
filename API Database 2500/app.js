const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');


const express = require('express');
const bodyParser = require('body-parser');
const {dataBaseService} = require('./src/dataBaseService');

const app = express();


app.use(bodyParser.json());
app.use(cors());



require('./src/routes')(app , dataBaseService());

app.listen(2500,function(){
    console.log('API 2500 -> data base');

});

