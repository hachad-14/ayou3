$(document).ready(function() {
    $("#firstF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "Ba bref, y'a deux semaines j'ecrivais le texte pour nos 2 mois, et me voila entrain d'écrire celui de nos trois merveilleux mois.Trois mois magnifiques, pleins de bonheur et d'amour, depuis trois mois tout à changé et continue aujourd'hui, je n'ai plus besoin de rêver car c'est toi mon rêve,avec toi, j'envisage un avenir, un vrai, et c'est la première fois que ça m'arrive, je ne voudrai pas te perdre en si bon chemin.Je te remercie de m'avoir fais d'ecouvrir l'amour, quant à moi, je te ferais découvrir les 4 coins du paradis.je t'aime mon coeur, à nos 3 mois, à nous. Ce soir c'est toi qui est belle, pas la lune."

    });
    $("#secondF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "1-Partir à la plage vers 2h du matin.\n2-Rencard ultra chic.\n3-Dimanche aquaparc inchallah.\n4-Habiter ensemble à Paris.\n5-Finir nos études ensemble."

    });
    $("#thirdF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "A venir...\n Hhhhh pas d'avenir 3chiri."

    });
    $("#forthF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "Bonsoir mon amour, me revoila à réecrire pour 5 beaux mois, le temps passe vite, et je crois qu'on en a pleinement profité. 5 merveilleux mois, ou j'ai appris beaucoup de choses; comment t'aimer, te rendre heureuse, te rendre belle. Je ne veux plus passer un seul jour loin de toi, j'aime sentir ton souffle sur mon coup pendant nos câlins, ton côrps se resserer contre le mien, t'entendre rigoler à nos blagues bofi bof. Comme je te le dis, chaque jour je planifie notre avenir et je ne me vois pas sans toi. Tu es la personne qu’il me faut et je veux passer le rester de ma vie à tes côtés, dans notre petit paradis, et si tu n'es pas là, alors je refuse d'y être. J’espère que tu sais à quel point je t’aime et à quel point tu me combles chaque jour de bonheur. Tu es la plus belle personne que je connaisse. Je t’admire et je serais toujours là pour toi. Tu es le soleil qui illumine mes jours. J’ai de la chance d’être l’homme qui partage ta vie. Vivement la beauté de la lune ce soir."
    });
    $("#fifthF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "T'as vraiment cru que y'aurais pas de texte pour nos 6 mois grosse folle ? \nJe t'ai promis le paradis, et pour moi le paradis et construit de plein de petits attentions et détails, donc sois-en sûre qu'en aucun cas tu n'auras pas de textes pour notre moiniversaire, je suis entrain de retaper tout le texte oui.\nDepuis que je suis avec toi t'es le centre de mes pensées,Je pense à toi quand le soleil se lève. j’y pense pendant toute la journée et si parfois je rêve la nuit, c’est de toi et au bonheur qu'on a. Je t’aime mon coeur, avec toi je nage dans le bonheur, tu fais battre mon cœur, j’aime quand tu me souris, tu es mon paradis, je suis sûr que tu es la femme de ma vie. Joyeux 6 mois à la mère de nos futurs enfants, merci pour tout, le meilleur reste a venir.\nC'est toi ma lune ce soir."
    });
    $("#sixthF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "Bonsoir ma valentine, c'est ton valentin.\nC'est la premier fois que je souhaite une bonne Saint Valentin à une fille, et la vérité j'ai aucune idée de ce que je dois dire, à part que je suis dans un autre  monde avec toi, tu éblouis ma vie, t'es litteralement mon soleil rayonnant, chaque jour je t'aime davantage, aujourd'hui plus qu'hier et bien moins que demain.\nJoyeuse Saint Valentin ma valentine ❤"
    });
    $("#seventhF").click(function() {
        delete_note_page();
        get_nt_bod();
        document.getElementById("noteTxt").innerHTML = "Mais putain comment je ne peux pas y croire, wallah un futur moi serais venu chez moi et me dire écoute saad tu seras en couple avec aya et vous passerez plus d'un an, j'y aurais pas cru une seule petite seconde, Mais bon dieu en a décider et j'y peux rien mdr.\nAujourd'hui est un jour que j'attendais depuis 2 mois wallah, j'ai été rusé paceque même le jour de ton anniversaire j'ai réussi avoir un cadeau pour moi, très rusé le petit chat.\nJe sais pas comment on peut aimer aussi fort, mais je te jure que c'est indéscriptible ce que je ressens envers toi, c'est même magique, qu'est ce que c'est beau d'être avec toi matin midi soir.\nJe nous aimes tellement, merci pour tout salle folle, jamais ça ira mal entre nous.\n Je taime aller retour à lune"
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
        document.body.style.position = "absolute"
    }
    function delete_nt_bod() {
        document.getElementById("ntBod").style.visibility = 'hidden';
        document.body.style.position = "relative"
    }
}); 
