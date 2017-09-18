var express = require('express');
var bodyParser = require('body-parser');
var wc = require('./controllers/weather_controller')
var axios = require('axios');
var cors = require('cors');

var app = express();

app.use(cors());


app.use(bodyParser.json());
app.use(express.static('./../public/build'))

// app.get('/api/weather', () => { 
//     var apiKey = "93f2eae38ef62287a49caf1bae48e24f";
//     var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    
//     axios.get(baseUrl + 'London' + '&APPID=' + apiKey).then(function(res) {
//     console.log(res)
//     });
//  } )

app.get('/api/images', wc.read)

app.listen(3006, function(){
    console.log("Engines running")
});

