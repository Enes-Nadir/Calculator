const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){

  var num1 = req.body.n1;
  var num2 = req.body.n2;

  var result = parseFloat(num1) + parseFloat(num2);

  res.send("The result of the calculation is " + result);
});

app.post("/bmicalculator", function(req, res){

  var w = parseFloat(req.body.w);
  var h = parseFloat(req.body.h);

  var result2 = w/(h*h);

  res.send("Your BMI is " + result2 + " where " + result2 + " is equal to the calculated BMI");
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
