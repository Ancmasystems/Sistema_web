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

// Obtener la referencia de la Base de Datos
const db=firebase.database();


const nombre=document.getElementById("txtnombre")
const comentario=document.getElementById("txtComentario")
const enviar=document.getElementById("btn_enviar")

enviar.addEventListener('click',function(){
    // Obtener los valores de los campos del formulario
    let v_nombre=nombre.value
    let v_comentario=comentario.value

    // obtener la referencia de un nodo
    const nodo_referencia=db.ref("encuesta");

    // enviar los datos
    nodo_referencia.push({
        nombre:v_nombre,
        comentario:v_comentario
    });
}); 