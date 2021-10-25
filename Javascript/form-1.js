
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      swal('Error','Nombre requerido','error');
      /*SWAL de Sweet Alert*/
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length < 5) {
      swal('Error','Email invalido', 'error');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0) {
      swal('Error','Mensaje requerido','error');
      return;
    }
   
    this.submit();
    swal('Mensaje enviado','Nos pondremos en contacto de inmediato.')
    return false;

  }
 