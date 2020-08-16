 // Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDcaHwo7xjknYwQqDx5xpuLPtiOwuVTNqo",
  authDomain: "anca-systems.firebaseapp.com",
  databaseURL: "https://anca-systems.firebaseio.com",
  projectId: "anca-systems",
  storageBucket: "anca-systems.appspot.com",
  messagingSenderId: "986480890895",
  appId: "1:986480890895:web:7f91fe092f7eb741a07f7a",
  measurementId: "G-H4DLLHSK45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// //Obtener la referencia de la BD
// const db=firebase.database();


function iniciarsesion() {
    var email = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
   
    firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  
}
 
