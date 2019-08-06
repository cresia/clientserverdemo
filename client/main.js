$(document).ready(startApp);

function startApp(){
  getData();
  getFood();


}

function getFood() {
  var settings = {
    url: '../server/getFoods.json',
    method: 'GET',
    dataType: 'json',
    success: handleDataFromServer,


  }

  $.ajax(settings);

}

function getData(){
  var settings = {
    url: '../server/getnames.json',
    method: 'GET',
    dataType: 'json',
    success: handleDataFromServer,


  }

  $.ajax(settings);

}

function handleDataFromServer(response){
  console.log(response);

}
