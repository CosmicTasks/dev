const express = require('express');

const path = require('path');
const app = express();
const ejs = require('ejs');

const cors = require('cors');

app.use(cors());    
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//configuracão do diretorio público 
const publicDirectory = path.join(__dirname,'../../app');
app.use(express.static(publicDirectory));

//engine de visualizacao
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../../app'));

module.exports = app;
