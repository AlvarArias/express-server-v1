
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
console.log('get function');    
//console.log(request);
res.sendFile(__dirname + "/index.html");
//res.send("puta la hueva");
});
// BMI calculator
app.get("/bmiCalculator.html", function (req, res) {
//console.log('bmi function');    
res.sendFile(__dirname + "/bmiCalculator.html");
//res.send("puta la hueva");
});



app.post("/", function (req, res){
var a = Number(req.body.num1);
var b = Number(req.body.num2);

var result = a + b;

res.send("The calculation is " + result);

});

app.post("/bmiCalculator.html", function (req, res){
var a = Number(req.body.num1);
var b = Number(req.body.num2);

var result = (a / (b *b));
var bmi = result.toFixed(1);

res.send("your BMI is " + bmi);

});

app.listen(3000, function() {
    console.log("Sever started in port 3000");
});

