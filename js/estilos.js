// INICIALIZACION DE MENU RESPOSIVO
document.addEventListener('DOMContentLoaded', function() {
    var menu_responsivo = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(menu_responsivo,{
        indicators:true
    } );
  });
// INICIALIZACION DE SLIDER
document.addEventListener('DOMContentLoaded', () => {
    
    // Navegation Menu
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
 
    // Slider
    var elems = document.querySelectorAll('.slider');
     var instances = M.Slider.init(elems, {
        indicators: false,
        height: 400,
        duration: 650,
        interval:4000
     });
 });
// MENU DE NAVEGACION
   document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.dropdown-trigger');
       var instances = M.Dropdown.init(elems, {
          hover:true,
           contrainWidth:false,
          gutter:20,
          coverTrigger:false,
          alignment:'right' ,
           stopPropagation:false
      
      });
    });
//   INICIALIZACION MODALES
     document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems,);
        });

    // paralax

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, );
      });

// CARRUSEL INICIALIZACION
document.addEventListener('DOMContentLoaded', function(){
    var elementos = document.querySelectorAll('.carousel');
    var instancia = M.Carousel.init(elementos,{
        fullWidth: true,
        indicators: true
    });
    });
    
// BOTONES DESPLEGABLES REDES SOCIALES
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top',
        hoverEnabled:true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems,{
        onOpen:null
    } );
  });

// INIZIALIZACION DE SELECTS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, );
  });

// Materialbox
  document.addEventListener('DOMContentLoaded', function () {
    var elementos = document.querySelectorAll('.materialboxed');
    var instancias = M.Materialbox.init(elementos,)}
    );