$(document).ready(function() {
  
    $("#gal").click(function() {
        $('#gl h2').css('visibility', 'hidden');
        createCookie('gal_notif', true, 1);
        return false;
    });
    if (!readCookie('gal_notif')) {
        //nothing
    }else {
      $('#gl h2').css('visibility', 'hidden')
    }

    $("#notes").click(function() {
        $('#txt h2').css('visibility', 'hidden');
        createCookie('notes_notif', true, 1);
        return false;
    });
    if (!readCookie('notes_notif')) { 
        //nothing
    }else {
      $('#txt h2').css('visibility', 'hidden')
    }
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