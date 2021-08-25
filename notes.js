$(document).ready(function() {
    $("#firstF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "Bah bref, y'a deux semaines j'ecrivais le texte pour nos 2 mois, et me voila entrain d'écrire celui de nos trois merveilleux mois.Trois mois magnifiques, pleins de bonheur et d'amour, depuis trois mois tout à changé et continue aujourd'hui, je n'ai plus besoin de rêver car c'est toi mon rêve,avec toi, j'envisage un avenir, un vrai, et c'est la première fois que ça m'arrive, je ne voudrai pas te perdre en si bon chemin.Je te remercie de m'avoir fais d'ecouvrir l'amour, quant à moi, je te ferais découvrir les 4 coins du paradis.je t'aime mon coeur, à nos 3 mois, à nous. Ce soir c'est toi qui est belle, pas la lune."

    });
    $("#secondF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "1-Partir à la plage vers 2h du matin.\n2-Rencard ultra chic.\n3-Dimanche aquaparc inchallah.\n4-Habiter ensemble à Paris.\n5-Finir nos études ensemble."

    });
    $("#thirdF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "A venir..."

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