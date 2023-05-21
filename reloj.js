function avanzaReloj() {
    var momentoActual = new Date();
    var hora = addZeroPadding(momentoActual.getHours());
    var minuto = addZeroPadding(momentoActual.getMinutes());
    var segundo = addZeroPadding(momentoActual.getSeconds());
    var horaAMostrar = hora + " : " + minuto + " : " + segundo;
    document.form_reloj.reloj.value = horaAMostrar;
    setTimeout(avanzaReloj, 1000);

  }
  
  function addZeroPadding(valor) {
    if (valor < 10) {
      return "0" + valor;
    }
    return valor;
  }
  function actualizarReloj() {
    var fechaActual = new Date();
    var opcionesHora = { timeZone: 'America/Argentina/Buenos_Aires', hour12: false };
    var hora = fechaActual.toLocaleTimeString('es-AR', opcionesHora);
    
    document.getElementById("hora").textContent = hora;
  }
  
  setInterval(actualizarReloj, 1000);
  
  // Función para iniciar el reloj
  avanzaReloj();