$(document).ready(function() {

  $("#insta").click(function() {
    console.log("test");
    document.getElementById("main-page").style.visibility = "hidden";
    document.getElementById("ayou_gram").style.visibility = "visible";

    //CODE
  });
});
document.querySelectorAll('img').forEach(el=> {

  el.addEventListener('dragstart', e => {
      e.preventDefault(); 
      return false; 
  });

  // customize your pressure force
  const force = 0.2; 

  // iOS
  el.addEventListener('touchforcechange', e => {
      if (e.changedTouches[0].force < force) {
          e.preventDefault();
          return false;
      }
  });

  // Standard, Firefox
  el.addEventListener('touchstart', e => {
      if (e.targetTouches[0].force < force) {
          e.preventDefault();
          return false;
      }
  });

});
