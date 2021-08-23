$(document).ready(function() {
    $("#firstF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "aaaa"

    });
    $("#secondF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "sfdf"

    });
    $("#thirdF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "hbgn"

    });
    $("#nt_arrow").click(function() {
        get_note_page();
        delete_nt_bod();

    });

    function delete_note_page() {
        document.getElementById("txtHolder").style.visibility = 'hidden';
        document.getElementById("nt_arrow").style.visibility = 'visible';
    }
    function get_note_page() {
        document.getElementById("txtHolder").style.visibility = 'visible';
        document.getElementById("nt_arrow").style.visibility = 'hidden';
    }
    function get_nt_bod() {
        document.getElementById("ntBod").style.visibility = 'visible';
    }
    function delete_nt_bod() {
        document.getElementById("ntBod").style.visibility = 'hidden';
    }
}); 