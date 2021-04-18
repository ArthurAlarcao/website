
 var ImgName, ImgUrl, ImgDescription;
 var files = [];
 var reader;  

 var firebaseConfig = {
  apiKey: "AIzaSyB3HXWetjNVzku8IVLq9gFKz7T7ss9KwAE",
  authDomain: "uploadprojects-1c91f.firebaseapp.com",
  databaseURL: "https://uploadprojects-1c91f-default-rtdb.firebaseio.com",
  projectId: "uploadprojects-1c91f",
  storageBucket: "uploadprojects-1c91f.appspot.com",
  messagingSenderId: "201070662923",
  appId: "1:201070662923:web:d8f012cd9713fd2931fe0e"
};
// Initialize Firebase

 document.getElementById("select").onclick = function(e){

     var input = document.createElement('input');
     input.type = 'file';
     input.click();
   
     input.onchange = e => {
         files = e.target.files;
         reader = new FileReader();
         reader.onload =  function(){
             document.getElementById("myimg").src = reader.result;
         }
         reader.readAsDataURL(files[0]);
     }
     
 }

 document.getElementById("upload").onclick = function(){
     ImgDescription = document.getElementById('boxInfo').value;
     ImgName = document.getElementById('namebox').value;
     var uploadTask = firebase.storage().ref('Images/' + ImgName + ".png").put(files[0]);

     uploadTask.on('state_changed',function(snapshot){
      var progress = (snapshot.bytesTranferred / snapshot.totalBytes)*100;
     },
     
     function(error){
         alert('error');
     },

     function(){
         uploadTask.snapshot.ref.getDownloadURL().then(function(url){
             ImgUrl = url;

             firebase.database().ref('Pictures/'+ ImgName).set({
                 Title: ImgName,
                 Link: ImgUrl,
                 Description: ImgDescription
             });
             alert('Successfully Uploaded');
         }

     );
     });
 }
    
        
               