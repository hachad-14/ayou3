$(document).ready(function() {
    console.log('clicked');
    var name = 'player N';
    document.getElementById("newplayer").onclick = function() {
        if(document.getElementById("playerNameInput").value.length == 0) {
            username = 'Player1';
        } else {
            name = document.getElementById('playerNameInput').value.toLowerCase();
        }
        function pConnection(name) {
            var playerName = document.getElementById('playerNameInput').value.toLowerCase();
            firebase.database().ref('Players/'+playerName).set({
              username: name,
            });
        }
        pConnection();
    }
});