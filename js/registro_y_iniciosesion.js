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
  const auth = firebase.auth();


  // Registro formulario
  const Form_registro = document.querySelector('#F_registro')
    
  Form_registro.addEventListener('submit', (e) =>{
    e.preventDefault();

    
  const Registro_email = document.querySelector('#email_Registro').value
  const Registro_contrasena = document.querySelector('#contrasena_Registro').value

   auth
        .createUserWithEmailAndPassword(Registro_email, Registro_contrasena)
        .then(userCredential => {

          Form_registro.reset();

          console.log('usuario registrado')
        })
  
      })

//  Inicio sesion Formulario
const Form_iniciosesion = document.querySelector('#F_Iniciosesion')
    
 Form_iniciosesion.addEventListener('submit', (e) =>{
   e.preventDefault();

   const iniciosesion_email = document.querySelector('#correo_iniciosesion').value
   const iniciosesion_contrasena = document.querySelector('#password_in').value

   auth
       .signInWithEmailAndPassword(iniciosesion_email, iniciosesion_contrasena)
       .then(userCredential => {

     Form_registro.reset();

     console.log('usuario registrado')
   })

 })

