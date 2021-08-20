$(document).ready(function() {
    $("#s1").click(function() {
        document.getElementById("s1s").style.visibility = "visible";
        console.log("test")
    });
    $("#heart").dblclick(function() {
        document.getElementById("heart").style.filter = "invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)";
      });
}); 