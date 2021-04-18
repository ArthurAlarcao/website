  // Your web app's Firebase configuration
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
  firebase.initializeApp(firebaseConfig);    

    const auth = firebase.auth();

    function signUp(){

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      
      alert("Signed Up");

    }

    function signIn(){

      var email = document.getElementById("email");
      var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
      
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
   
         window.location = "dashboard.html";
       // ...
      })
        .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       alert("Wrong Email or Password");
       });
     
      

    }

    function signOut(){

      auth.signOut();
      alert("Signed Out");

      window.location = "homepage.html";

  }



   auth.onAuthStateChanged(function(user){

      if(user){
          var email = user.email;
          alert("Active User " + email);
          
      }

      else{
          alert("Please Login to Continue");
          window.location = "login.html";
                 
      }

    }
    
   );

   

  