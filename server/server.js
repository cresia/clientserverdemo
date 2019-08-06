const express = require('express'); // it loads the code and store it in a variable
const cors = require('cors');

const server = express();

const names = [
  {
    "name": "Kim"
  },
  {
    "name": "Jase"
  },
  {
    "name": "Jae"
  },
  {
    "name": "Tes"
  },
  {
    "name": "Mona"
  },
  {
    "name": "Cathy"
  },
  {
    "name": "Raul"
  }
]


const favFoods = [
  {
    "FoodName": "ice cream",
    "age": 3
  },
  {
    "FoodName": "chips",
    "age": 6
  },
  {
    "FoodName": "chocolate",
    "age": 8
  }
]




server.use( cors() )


//create one endpoint for foods and names
server.get('/favFoods', function(req,res){
  // res.send("Hello foods world");
  res.send(favFoods);

})

server.get('/names', function(req,res){
   // res.send("Hello names world");
  res.send(names)

})


server.listen(3002, function () {
  console.log("carrier has arrived");
})
