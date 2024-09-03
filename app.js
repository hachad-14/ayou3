$(document).ready(function() {

    document.getElementById('our_last_dance').innerHTML = "Salam,\nJe t'écris parce que j'ai besoin de vider mon cœur avant que je ne perde complètement le nord.\nJe ne sais pas vraiment par où commencer, mais j'essaierai d'être le plus bref et précis possible. \nLa fin de notre histoire m'a laissée dans une impasse où il m'est devenu impossible d’avancer.\nJe n’arrive pas à oublier, et honnêtement, ce n'est pas que je n’y arrive pas, mais c'est que je ne veux pas, et en même temps comment tu veux que j'oublie.\nT'oublier reviendrait à effacer cinq années d’amitié et trois années de relation.\nÇa reviendrait à effacer la magnifique petite amie que tu était, et par conséquent, m’effacer moi-même.\nLe fait que je n’ai jamais vraiment parlé de tout cela avec quelqu'un d'autre joue sûrement un rôle à fin que je ne puisse pas avancer, en même temps, j’évitais toute conversation dès que ton nom était mentionné.\nPour être tout à fait honnête, la nouvelle Aya ne m’intéresse pas, loin de moi l’idée de vouloir revenir en arrière, car je pense que c’est impossible et trop compliqué, mais je voudrais tellement retrouver la Aya que j'ai connue quand j’avais 16 ans, et je sais bien que ce n'est pas possible.\nJe me rends compte de beaucoup de choses, d’abord, je pense que je ne t’oublierai probablement pas, même dans 30 ans, à chaque souvenir de jeunesse que j'aurais, tu seras là, même dans 50 ans, je n'oublierais jamais notre premier bisous.\net puis tu restera pour toujours mon premier amour, ce qui à ce point est plus négatif qu’autre chose.\nJe ne sais pas ce que demain me réserve, mais y vivre sans y penser à toi me semble impossible, depuis dix mois, il ne s'est pas passé une journée sans que je ne pense à toi, sous toutes les formes : la colère, la joie, la tristesse, tout y est.\nJ'ai aussi réalisé que malgré tous mes efforts pour t’oublier, tout me ramène à toi, les chansons que nous avons écouté, les endroits où on à trainé, nos réfs, ce que nous aurions pu faire aujourd’hui, tout me rappelle toi.\nÀ ce stade, t'oublier n’est pas une option, et je ne sais même pas si cela m'arrange ou non.\nJ’ai attendu, chaque jour un message ou un appel pour comprendre comment tout a basculé si vite, comment peut-on passer si rapidement d'un extrême à l'autre, ce silence m’a laissé complètement perdu, cherchant encore des réponses.\nJe ne savais pas que le premier amour pouvait laisser une telle trace sur toute notre vie, qu'il pouvait nous faire réfléchir autant le soir et changer notre manière de vivre.\nParfois tout va bien, puis je me rappelle que j’ai perdu ma ayou, la personne avec qui je partageais tout, avec qui j’ai appris à aimer, avec qui j’ai pu être pleinement moi-même, et cette nostalgie est capable de détruire des montagnes.\nJ’essaie d'amocher la version de toi qui vit en moi, mais ça m'est impossible.\nAu final, j’espère sincèrement que tu garderas tes valeurs et tes principes, ne change pas pour plaire aux autres, tu es parfaite dans mes souvenirs, alors reste telle que tu es.\nP.S. : La lune se moque de moi et me demande où est passée la personne avec qui je la comparais."
    
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