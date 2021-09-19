$(document).ready(function() {
  
  $("#insta").click(function() {
    get_overflow();
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("ayou_gram").style.visibility = "visible";
    document.body.style.backgroundColor = "#fff";
    document.body.style.position = "absolute"; 
    
    $("#ag_arrow").click(function() {
      rem_overflow();
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("ayou_gram").style.visibility = "hidden";
      document.body.style.backgroundColor = "#04003e";
      document.body.style.position = "fixed"; 
    });
  });
  $("#notes").click(function() {
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("notesP").style.visibility = "visible";
    document.getElementById("txtHolder").style.visibility = 'visible';
    document.body.style.backgroundColor = "#eeeef3";
    
    $("#n_arrow").click(function() {
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("notesP").style.visibility = "hidden";
      document.getElementById("txtHolder").style.visibility = 'hidden';
      document.body.style.backgroundColor = "#04003e";
    });
  });
  $("#only").click(function() {
    get_overflow();
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("onlyAyou").style.visibility = "visible";
    document.getElementById("all").style.visibility = "visible";
    document.getElementById("oa_arrow").style.visibility = "visible";
    document.getElementById("all").style.visibility = "visible";
    document.body.style.backgroundColor = "#eeeef3";
    document.body.style.position = "relative"

    $("#oa_arrow").click(function() {
      $('html,body').scrollTop(0);
      rem_overflow();
      document.getElementById("all").style.visibility = "hidden";
      document.getElementById("onlyAyou").style.visibility = "hidden";
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("oa_arrow").style.visibility = "hidden";
      document.body.style.backgroundColor = "#04003e";
      document.body.style.position = "fixed"
    });
  });
  function get_overflow() {
    document.body.style.overflowY = "scroll";
  }
  function rem_overflow() {
    document.body.style.overflowY = "hidden";
  }
});
