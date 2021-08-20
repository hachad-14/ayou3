$(document).ready(function() {
  
  $("#insta").click(function() {
    console.log("test");
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("ayou_gram").style.visibility = "visible";
    document.body.style.backgroundColor = "#fff";
    document.body.style.position = "absolute"; 
    
    $("#ag_arrow").click(function() {
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("ayou_gram").style.visibility = "hidden";
      document.body.style.backgroundColor = "#04003e";
      document.body.style.position = "fixed"; 
    });
  });
  $("#notes").click(function() {
    console.log("test");
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("notesP").style.visibility = "visible";
    document.body.style.backgroundColor = "#eeeef3";
    
    $("#n_arrow").click(function() {
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("notesP").style.visibility = "hidden";
      document.body.style.backgroundColor = "#04003e";
    });
  });
});
