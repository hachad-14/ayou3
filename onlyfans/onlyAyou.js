const firebaseConfig = {
    apiKey: "AIzaSyBsWbH_cHvDHsMFiMi_DNn13e7sfwk2zZA",
    authDomain: "test-54a77.firebaseapp.com",
    databaseURL: "https://test-54a77-default-rtdb.firebaseio.com",
    projectId: "test-54a77",
    storageBucket: "test-54a77.appspot.com",
    messagingSenderId: "94297928022",
    appId: "1:94297928022:web:f82973978d5592cc47a6f7",
    measurementId: "G-12GPLK769J"
};
firebase.initializeApp(firebaseConfig);

var stdNo = 0;

function addItemsToList(name,com,user) {
    var ul = document.getElementById('list');
    
    var _name = document.createElement('li');
    var _com = document.createElement('li');
    var _user = document.createElement('h1')

    //_name.innerHTML = 'Name : '+ name;
    _com.innerHTML = 'Commentaire : '+ com;
    
    ul.appendChild(_user);
    ul.appendChild(_name);
    ul.appendChild(_com);
}
firebase.database().ref('Pictures').orderByChild('Order').once('value',function test(snapshot) {
    snapshot.forEach (
        function(childSnapshot) {   
            console.log( childSnapshot.val().Link);
            var ul = document.getElementById('list');
            var header = document.createElement('p');
            header.innerHTML =  childSnapshot.val().Name;
            ul.appendChild(header);
            let name = '';
            let user = '';
            let com = childSnapshot.val().Commentaire;
            $("#list").append("<img src=" + childSnapshot.val().Link + "/img>");
            addItemsToList(name,com,user);
        }
    );
});
