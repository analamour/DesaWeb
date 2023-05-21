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
  
  // Función para iniciar el reloj
  avanzaReloj();