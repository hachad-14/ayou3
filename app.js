$(document).ready(function() {

  $("#insta").click(function() {
    console.log("test");
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("ayou_gram").style.visibility = "visible";
    document.getElementById("ayou_gram").style.transition = "0.5s ease";
    document.getElementById("ayou_gram").style.opacity = "1";
    document.body.style.backgroundColor = "#fff"; 
    
    $("#ag_arrow").click(function() {
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("ayou_gram").style.visibility = "hidden";
      document.getElementById("ayou_gram").style.transition = "0s ease";
      document.getElementById("ayou_gram").style.opacity = "0";
      document.body.style.backgroundColor = "#04003e"; 
    });
  });
});
