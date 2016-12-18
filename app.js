// Object litiral to store lunch(names)
var lunch = {
  name: ""
};
document.addEventListener("DOMContentLoaded", loadFunc);
function loadFunc(event) {
  document.getElementById("button").addEventListener("click", getData);
}

function getData(event) {
  showFunc();
}

function showFunc() {
  lunch.name = document.getElementById('lunch-menu').value;

  // Sitt the input value to string variable
  var string = lunch.name;
  // convert string to array whether to count lunch (names)
  // use comma as splite argument
  var strConvert = string.split(',');
  
  // check number of lunch
  if (strConvert.length <= 3) {
    document.getElementById('message').innerHTML = "Enjoy!";
  }else {
    document.getElementById('message').innerHTML = "Too much!";
  }
  console.log(strConvert);
}
