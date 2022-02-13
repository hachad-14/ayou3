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
      document.body.style.position = "fixed"; 
    });
  });
  $("#gal").click(function() {
    get_overflow();
    document.getElementById("gameP").style.visibility = "hidden";
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("photos").style.visibility = "visible";
    document.getElementById("pMain-page").style.visibility = "visible";
    document.getElementById("g_arrow").style.visibility = "visible";
    document.body.style.backgroundColor = "#fff";
    document.body.style.position = "absolute"; 
    
    $("#g_arrow").click(function() {
      rem_overflow();
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("photos").style.visibility = "hidden";
      document.getElementById("pMain-page").style.visibility = "hidden";
      document.getElementById("photos-page").style.visibility = "hidden";
      document.getElementById("g_arrow").style.visibility = "hidden";
      document.body.style.position = "fixed"; 
    });
  });
  $("#notes").click(function() {
    document.body.style.position = "absolute"
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("notesP").style.visibility = "visible";
    document.getElementById("txtHolder").style.visibility = 'visible';
    
    $("#n_arrow").click(function() {
      document.body.style.position = "fixed"
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("notesP").style.visibility = "hidden";
      document.getElementById("txtHolder").style.visibility = 'hidden';
    });
  });
  $("#only").click(function() {
    document.body.style.height = "10vw"; 
    get_overflow();
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("onlyAyou").style.visibility = "visible";
    document.getElementById("all").style.visibility = "visible";
    document.getElementById("oa_arrow").style.visibility = "visible";
    document.getElementById("all").style.visibility = "visible";
    document.body.style.position = "relative"

    $("#oa_arrow").click(function() {
      $('html,body').scrollTop(0);
      rem_overflow();
      document.getElementById("all").style.visibility = "hidden";
      document.getElementById("onlyAyou").style.visibility = "hidden";
      document.getElementById("main-page").style.visibility = "visible";
      document.getElementById("oa_arrow").style.visibility = "hidden";
      document.body.style.position = "fixed"
    });
  });
  $("#game").click(function() {
    get_overflow();
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("gameP").style.visibility = "visible";
    document.body.style.overflow = "hidden"
    setTimeout(() => {  alert("Pas encore disponible!"); test(); }, 0);

    function test() {
      rem_overflow();
      document.getElementById("gameP").style.visibility = "hidden";
      document.getElementById("main-page").style.visibility = "visible";
      document.body.style.position = "fixed"
      document.body.style.backgroundColor = "#eeeef3";
      document.getElementById("gameP").style.visibility = "hidden";
    }

    $("#gp_arrow").click(function() {
      $('html,body').scrollTop(0);
      rem_overflow();
      document.getElementById("gameP").style.visibility = "hidden";
      document.getElementById("main-page").style.visibility = "visible";
      document.body.style.position = "fixed"
      document.body.style.backgroundColor = "#eeeef3";
    });
  });
  function get_overflow() {
    document.body.style.overflowY = "scroll";
  }
  function rem_overflow() {
    document.body.style.overflowY = "hidden";
  }
});
