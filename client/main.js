$(document).ready(startApp);

function startApp(){
  getNameData();
  getFoodData();


}

function getFoodData() {
  var settings = {
    // url: '../server/getFoods.json',
    url: 'http://localhost:3002/favFoods',
    method: 'GET',
    dataType: 'json',
    success: handleFoodDataFromServer,


  }

  $.ajax(settings);

}


function getNameData(){
  var settings = {
    // url: '../server/getnames.json',
    url: 'http://localhost:3002/names',
    method: 'GET',
    dataType: 'json',
    success: handleNameDataFromServer,


  }

  $.ajax(settings);

}

function handleNameDataFromServer(response) {
  console.log("name data from server",response);

  for(var index = 0; index < response.length; index++){
    var nameDiv = $("<div>").text(response[index].name);
    $("body").append(nameDiv);

  }


}

function handleFoodDataFromServer(response) {
  console.log(response);


}
