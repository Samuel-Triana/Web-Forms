var selection = document.getElementById("selection");

var web =  document.getElementById("web_design");
var banner =  document.getElementById("banner_design");
var graphical =  document.getElementById("graphical_optimization");
var gui =  document.getElementById("gui_design");

selection.addEventListener("change", function(){
  
  if(selection.value == "Web Design"){
    clear();
    web.style.display = "inline";   
  }else if(selection.value == "Banner Design"){ 
    clear();
    banner.style.display = "inline"; 
  }else if(selection.value == "Graphical Optimization"){ 
    clear();
    graphical.style.display = "inline"; 
  }else if(selection.value == "GUI Design"){ 
    clear();
    gui.style.display = "inline"; 
  }
 });

function clear(){
  web.style.display = "none";
  banner.style.display = "none";
  graphical.style.display = "none";
  gui.style.display = "none";
}
