$(document).ready(function() {
    var mainPage = document.getElementById("pMain-page");
    var secondPage = document.getElementById("photos-page");
    var thirdPage = document.getElementById("amis-page");
    $("#aPhotos").click(function() {
        mainPage.style.visibility = "hidden";
        secondPage.style.visibility = "visible";
        document.getElementById("g_arrow").style.visibility = "hidden"
        $("#pp_arrow").click(function() {
            document.getElementById("g_arrow").style.visibility = "visible"
            document.getElementById("pMain-page").style.visibility = "visible";
            document.getElementById("photos-page").style.visibility = "hidden";
            document.getElementById("pp_arrow").style.visibility = "hidden"
        });
    });
    $("#aVideos").click(function() {
        alert("Cet page est indisponible due à l'incapacité de ton ptit ami.")
    });
    $("#aPers").click(function() {
        mainPage.style.visibility = "hidden"
        thirdPage.style.visibility = "visible"
        $("#ap_arrow").click(function() {
            mainPage.style.visibility = "visible"
            thirdPage.style.visibility = "hidden"
        });
    });
    $("#aLieux").click(function() {
        alert('Indisponible désolé :(')
    });
});