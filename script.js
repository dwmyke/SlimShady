var nameTagInput = document.getElementById("name");
var nameTagDisplay = document.getElementById("nameDisplay");

nameTagInput.addEventListener("keyup", function(event){
  var currentName = nameTagInput.value;
  nameTagDisplay.innerText = currentName;
  
});