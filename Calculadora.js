function calcular(operacion) {
    var valor1 = parseFloat(document.getElementById("input1").value);
    var valor2 = parseFloat(document.getElementById("input2").value);
    var resultado;
  
    if (isNaN(valor1) || isNaN(valor2)) {
      document.getElementById("result").textContent = "Ingrese valores numéricos válidos.";
      return;
    }
  
    switch (operacion) {
      case 1: // Suma
        resultado = valor1 + valor2;
        break;
      case 2: // Resta
        resultado = valor1 - valor2;
        break;
      case 3: // Multiplicación
        resultado = valor1 * valor2;
        break;
      case 4: // División
        if (valor2 !== 0) {
          resultado = valor1 / valor2;
        } else {
          document.getElementById("result").textContent = "No se puede dividir entre cero.";
          return;
        }
        break;
      default:
        document.getElementById("result").textContent = "Código de operación inválido.";
        return;
    }
  
    document.getElementById("result").textContent = resultado;
  }