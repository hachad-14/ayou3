$(document).ready(function() {

    document.getElementById('our_last_dance').innerHTML = "Salam Aya,\n Tout d’abord j’espère que toi et toute ta famille soyez en bonne santé.\n Je voudrais me vider et donner mon ressenti avant que je ne devienne fou.\n Je n’sais pas par où commencé, j’ai longtemps hésité à prendre contacte, mais je ne savais pas comment m’y prendre.\n La façon dont sa s’est terminée ne m’a pas permis d’avancer, je n’arrive pas à oublier, en vérité c’est pas que je n’y arrive pas, mais c’est que je ne veux pas, oublier reviens à oublier 5 ans d’amitiés et 3 ans de relation, ça revient oublier la magnifique Aya que t’étais, ça revient à m’oublier moi même.\n Si je n’arrive pas à avancer c’est aussi peut être dû au faite que je n’en ai jamais parlé avec personne, mais en même temps j’évitais toute discussion quand ton nom était évoqué.  Aussi pour être honnête, la nouvelle Aya ne me m’intéresse pas, loin de moi l’idée d’essayer de te récupérer car je crois que ça ne marchera pas, ça me semble impossible et trop compliqué, mais comment te dire que je pourrais tout donner pour retrouver la Aya que j’ai connu quand j’avais 16 ans, ce qui n’est bien évidement pas possible.\n Je me suis rendu compte de beaucoup de chose, la première est que je crois que je ne t’oublierai probablement pas, même à mes 50 ans, à chaque souvenir de moi jeune, tu es là, même à mes 60 ans , je n’oublierais pas comment j’ai pu t’aimer à mes 17 ans, tu est et restera mon premier amour, ce qui a ce point es plus négatif que positif. \n Je ne sais pas de quoi demain est fait, mais l’idée d’y vivre sans que tu ne me passe par l’esprit m’est impossible, depuis ces 10 mois, il ne s’est passé une seule journée sans que je ne pense à toi, sous toutes les formes de la pensée, la haine, la joie, la tristesse, littéralement tout.\n La deuxième est un est peu ouf, c’est que j’ai beau essayer d’éviter de penser à toi, mais absolument tout me rappel toi, les musiques qu’on écoutait, les endroit où on a pu traîner, les réfs qu’on a pu avoir, ce qu’on aurait pu faire aujourd’hui, ce qu’on aurait pu dire, alors je me suis rendu compte qu’à l’heure d’aujourd’hui, t’oublier n’est pas une option disponible, et à vrai dire, je ne sais ni si ça m’arrange ou pas le faite de t’oublier. \n Combien de fois j’ai cru que t’allais envoyer un message, ou appeler, pour essayer de m’expliquer ce qu’il se passe, car je ne te mens pas, je suis totalement perdu, le manque ne fait qu’augmenter, ce qui est totalement illogique, comment est ce possible que depuis 10 mois, le manque ne fait qu’augmenter, c’est aussi le faite de vouloir une réponse à cette question qui ne me permet pas d’avancer. \n Je ne savais pas que le premier amour, pouvait avoir conséquence sur tout le reste de notre vie, que ça pouvait faire autant réfléchir le soir, que sa changeait complètement la manière dont on vivait. \n Parfois tout vas bien, puis je me rappelle que j’ai perdu ma ayou, là personne avec qui jetait du matin ou soir, avec qui j’ai appris à aimer, avec qui j’ai tant été moi même, et ce type de nostalgie peut détruire des montagnes, alors j’essaie d’amocher la version de toi qui vie en moi, mais ça m’est littéralement impossible. \n J’espère que tu garderas tes valeurs et principes, n’essaie pas de plaire au autres en changeant tes manières, tu es parfaite dans mes souvenirs, alors reste le.\n  ps : La lune se moque de moi et me demande où était passé la personne avec qui je la comparait."
    
    const passcode_box = document.getElementById('pb');

    document.getElementById('b1').addEventListener('click', function() {passcode_box.textContent += "1";});
    document.getElementById('b2').addEventListener('click', function() {passcode_box.textContent += "2";});
    document.getElementById('b3').addEventListener('click', function() {passcode_box.textContent += "3";});
    document.getElementById('b4').addEventListener('click', function() {passcode_box.textContent += "4";});
    document.getElementById('b5').addEventListener('click', function() {passcode_box.textContent += "5";});
    document.getElementById('b6').addEventListener('click', function() {passcode_box.textContent += "6";});
    document.getElementById('b7').addEventListener('click', function() {passcode_box.textContent += "7";});
    document.getElementById('b8').addEventListener('click', function() {passcode_box.textContent += "8";});
    document.getElementById('b9').addEventListener('click', function() {passcode_box.textContent += "9";});
    document.getElementById('b0').addEventListener('click', function() {passcode_box.textContent += "0";});

    var audio = new Audio('');

    document.getElementById('ok_btn').addEventListener('click', function() {
        const og_pass = '205140';
        var passcode = document.getElementById('pb').innerHTML;

        if (passcode == og_pass) {
            document.getElementsByTagName("body")[0].style.overflowX = "auto";
            document.getElementsByTagName("body")[0].style.position = "absolute";
            var audio = new Audio('images/music/laylow.mp3');
            var audio1 = new Audio('images/music/ninho.mp3');
            var audio2 = new Audio('images/music/zam.mp3');
            var audio3 = new Audio('images/music/toto.mp3');
            document.getElementById("landing_page").style.visibility = "hidden";
            document.getElementById("second_page").style.visibility = "visible";

            document.getElementById("mp_image").src = "images/music/laylow.jpeg";
            audio.play();
            document.getElementById('mb_cover_one').addEventListener('click', function() {
                document.getElementById("mp_image").src = "images/music/laylow.jpeg";
                document.getElementById("mp_title").innerHTML = "Laylow - Une histoire étrange";
                audio.currentTime = 0;
                audio1.pause();
                audio2.pause();
                audio3.pause();
                audio.play();
            });
            document.getElementById('mb_cover_two').addEventListener('click', function() {
                document.getElementById("mp_image").src = "images/music/ninho.jpeg";
                document.getElementById("mp_title").innerHTML = "Ninho, Kore - Mon poto";
                audio1.currentTime = 0;
                audio.pause();
                audio2.pause();
                audio3.pause();
                audio1.play();
            });
            document.getElementById('mb_cover_three').addEventListener('click', function() {
                document.getElementById("mp_image").src = "images/music/zam.jpeg";
                document.getElementById("mp_title").innerHTML = "Zamdane - Fleurs";
                audio2.currentTime = 0;
                audio.pause();
                audio1.pause();
                audio3.pause();
                audio2.play();
            });
            document.getElementById('mb_cover_four').addEventListener('click', function() {
                document.getElementById("mp_image").src = "images/music/toto.jpeg";
                document.getElementById("mp_title").innerHTML = "EGT, Ckay - Love nwantiti";
                audio3.currentTime = 0;
                audio.pause();
                audio1.pause();
                audio2.pause();
                audio3.play();
            });
        } else {
            alert("Mot de passe incorrecte.");
            passcode_box.innerText = "";
        }
    });
    document.getElementById('del_btn').addEventListener('click', function() {
        passcode_box.innerText = "";
    });
    document.getElementById('indice').addEventListener('click', function() {
        alert("-Le mot de passe est composé de 4 à 6 chiffres.\n-Notre premier ...\n-Il ne te reste plus qu'a trouver le bon ordre.\n-La suite commence par le chiffre : 20.");
    });
    document.getElementById('b_arrow').addEventListener('click', function() {
        document.getElementById("second_page").style.visibility = "hidden";
        document.getElementById("landing_page").style.visibility = "visible";
        document.getElementsByTagName("body")[0].style.position = "fixed";
    });
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/posts/Order/?amount=-1')
        .then(res => res.json())
        .then(res => {
          console.log(res.value);
          order = res.value;
        })
      }
});