$(document).ready(function() {
  document.getElementById("main-page").style.visibility = "hidden";
  window.onload = function(){
    document.getElementById("main-page").style.visibility = "visible"; 
    console.log("page loaded.");
  };

  $("#insta").click(function() {
    console.log("test");
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("ayou_gram").style.visibility = "visible";
    document.body.style.backgroundColor = "#fff"; 
    
    $("#ag_arrow").click(function() {
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("ayou_gram").style.visibility = "hidden";
      document.body.style.backgroundColor = "#04003e"; 
    });
  });
});
