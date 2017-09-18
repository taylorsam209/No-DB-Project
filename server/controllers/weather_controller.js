// module.exports = {
//     read: (req, res) => {
//         var apiKey = "93f2eae38ef62287a49caf1bae48e24f";
//         var baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        
//         axios.get(baseUrl + 'London' + '&APPID=' + apiKey).then(function(res) {
//         console.log(res)
//         });
//     },
// }


const utahImages = ["Choose a city to see the weather!"];

module.exports= {
read: function (req, res, next) {
    res.status(200).send(utahImages)
}
}