$(document).ready(function() {
    $("#post_i").click(function() {
      document.body.style.overflowY = "hidden";
      document.getElementById("all").style.visibility = "hidden";
      document.getElementById("postPage").style.visibility = "visible";
      document.getElementById("oa_arrow").style.visibility = "hidden";
      document.getElementById("pg_arrow").style.visibility = "visible";
      document.body.style.position = "fixed"
    });
    $("#pg_arrow").click(function() {
      document.body.style.overflowY = "scroll";
      document.getElementById("all").style.visibility = "visible";
      document.getElementById("postPage").style.visibility = "hidden";
      document.getElementById("oa_arrow").style.visibility = "visible";
      document.getElementById("pg_arrow").style.visibility = "hidden";
      document.body.style.position = "relative"
    });

    var ImgName, ImgUrl, comment, order;
    var files = [];
    var reader;
    
    document.getElementById("select").onclick = function(e) {
        var input = document.createElement('input');
        input.type = 'file';
        //input.capture = 'user' or 'environement'
        input.addEventListener('change', (e) => {
          files = e.target.files;
          reader = new FileReader();
          reader.onload = function() {
            document.getElementById("myimg").src = files.result;
            $('#myimg').attr('src', reader.result);
            document.getElementById('comment').innerHTML = '';
          }
          reader.readAsDataURL(files[0])
        });
        input.click();
    }

    document.getElementById("upload").onclick = function() {
      get_Order();
      if(document.getElementById("namebox").value.length == 0) {
        ImgName = 'post' + Math.floor(1000 + Math.random() * 9000);
        console.log(ImgName + '.png');
      } else {
        ImgName = document.getElementById('namebox').value.toLowerCase();
      }
      comment = document.getElementById('commentbox').value;
      var uploadTask = firebase.storage().ref('Images/'+ImgName+".png").put(files[0]);
      uploadTask.on('state_changed', function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById("console").innerHTML = 'Upload'+' '+progress+'%';
      },
      function(error) {
        alert('error');
      },
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(url) {
          ImgUrl = url;
          firebase.database().ref('Pictures/'+ImgName).set({
            Name: ImgName,
            Link: ImgUrl,
            Commentaire: comment,
            Order: order
          });
          console.log('Image Stored In DataBase.');
          document.getElementById('console').innerHTML = 'Image Stored In DataBase';
        
          setTimeout( function(){ 
            document.getElementById('commentbox').value = '';
            document.getElementById('console').innerHTML = '';
          }, 1500 );
        });
      });
    }

    const img = document.getElementById('myimg');
    img.onload = function test() {
      console.log('width:'+this.width+' - height:'+this.height);
      console.log('----------------');
      if ($('#box img').height() > 300) {
        $('#box img').css('objectFit', 'cover');
        $('#box img').css('height', '100vw');
        $('#box').css('height', '100vw');
      } else{
        $('#box img').css('height', 'auto');
        $('#box').css('height', 'au');
      }
    }

    function get_Order() {
      updateVisitCount();
    
      function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/posts/Order/?amount=-1')
        .then(res => res.json())
        .then(res => {
          console.log(res.value);
          order = res.value;
        })
      }
    }
});
  