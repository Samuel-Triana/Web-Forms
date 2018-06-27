var selection = document.getElementById("selection");
var building = document.getElementById("building");
var conversion = document.getElementById("conversion");
var ref_type = document.getElementById("ref_type");
var file = document.getElementById("file");
var link = document.getElementById("link");


selection.addEventListener("change", function(){
  if(selection.value == "Build a New Form"){
    clear();
    building.style.display = "inline";   
  }else if(selection.value == "Convert an Existing Form"){ 
    clear();
    conversion.style.display = "inline"; 
  }
 });

function clear(){
  building.style.display="none";
  conversion.style.display="none";
}
