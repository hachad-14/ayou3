$(document).ready(function() {


  $("#s1").click(function() {
    $('#s1 h2').css('visibility', 'visible');
    $('#crossS').css('visibility', 'visible');
    document.body.style.position = "fixed"; 
  });
  $('#crossS').click(function() {
    $('#s1 h2').css('visibility', 'hidden');
    $('#crossS').css('visibility', 'hidden');
    document.body.style.position = "absolute"; 
  });

  $("#s2").click(function() {
    $('#s2 h2').css('visibility', 'visible');
    $('#cross2').css('visibility', 'visible');
    document.body.style.position = "fixed"; 
  });
  $('#cross2').click(function() {
    $('#s2 h2').css('visibility', 'hidden');
    $('#cross2').css('visibility', 'hidden');
    document.body.style.position = "absolute"; 
  });

  $("#s3").click(function() {
    $('#s3 h2').css('visibility', 'visible');
    $('#cross3').css('visibility', 'visible');
    document.body.style.position = "fixed"; 
  });
  $('#cross3').click(function() {
    $('#s3 h2').css('visibility', 'hidden');
    $('#cross3').css('visibility', 'hidden');
    document.body.style.position = "absolute"; 
  });

  $("#s4").click(function() {
    $('#s4 h2').css('visibility', 'visible');
    $('#cross4').css('visibility', 'visible');
    document.body.style.position = "fixed"; 
  });
  $('#cross4').click(function() {
    $('#s4 h2').css('visibility', 'hidden');
    $('#cross4').css('visibility', 'hidden');
    document.body.style.position = "absolute"; 
  });






  $("#pm1").dblclick(function() {
    $('#p1 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q1', true, 1);
    return false;
  });
  $("#pm2").dblclick(function() {
    $('#p2 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q2', true, 1);
    return false;
  });
  $("#pm3").dblclick(function() {
    $('#p3 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q3', true, 1);
    return false;
  });
  $("#pm4").dblclick(function() {
    $('#p4 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q4', true, 1);
    return false;
  });
  $("#pm5").dblclick(function() {
    $('#p5 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q5', true, 1);
    return false;
  });
  $("#pm6").dblclick(function() {
    $('#p6 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)');
    createCookie('q6', true, 1);
    return false;
  });

  if (!readCookie('q1')) {
    $('#p1 h3').css('filter', 'invert(0%)')
  }else {
    $('#p1 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  if (!readCookie('q2')) {
    $('#p2 h3').css('filter', 'invert(0%)')
  }else {
    $('#p2 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  if (!readCookie('q3')) {
    $('#p3 h3').css('filter', 'invert(0%)')
  }else {
    $('#p3 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  if (!readCookie('q4')) {
    $('#p4 h3').css('filter', 'invert(0%)')
  }else {
    $('#p4 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  if (!readCookie('q5')) {
    $('#p5 h3').css('filter', 'invert(0%)')
  }else {
    $('#p5 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  if (!readCookie('q6')) {
    $('#p6 h3').css('filter', 'invert(0%)')
  }else {
    $('#p6 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)')
  }

  // Add the event that closes the popup and sets the cookie that tells us to
  // not show it again until one day has passed.

  //const myCanvas = document.getElementById("pm1");
  //myCanvas.addEventListener('dblclick', function(){
  //  $('#p1 h3').css('filter', 'invert(36%) sepia(71%) saturate(5026%) hue-rotate(337deg) brightness(96%) contrast(105%)'); 
  //  createCookie('hide', true, 1)
  //  return false;
  //});
});

// ---
// And some generic cookie logic
// ---
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*31*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/; Set-Cookie: SameSite=None; Secure ";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}