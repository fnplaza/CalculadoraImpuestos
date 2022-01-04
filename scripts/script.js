// ***********************************************************
// *                       Funciones                         *
// ***********************************************************
/*function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);*/
// !Funcion Impuestos
export function impuestos(monto, porcentaje) {
  let impuesto = (monto * porcentaje) / 100;
  return impuesto.toFixed(2);
}
export function resultadovalido(results) {
  if (isNaN(results) || results == "undefined") {
    return "Insertar solamente numeros";
  } else {
    return results;
  }
}
export function multiplicarMon(moneda1, moneda2) {
  return moneda1 * moneda2;
}
export function validaCheckboxPAIS(total) {
  let montoPAIS = (total * 30) / 100;
  let finalPAIS = total + montoPAIS;
  let checked = checkboxImpuestoPAIS.checked;
  if (checked) {
    return montoPAIS;
  }
  return "";
}
export function validaCheckboxAFIP(total) {
  let montoAFIP = (total * 35) / 100;
  let finalAFIP = total + montoAFIP;
  let checked = checkboxImpuestoAFIP.checked;
  if (checked) {
    return montoAFIP;
  } else {
    return " ";
  }
}
export function validadorTotalitario(total, afip, pais) {
  let sumaTotal = total + afip + pais;
  if (afip == " " || pais == " " || isNaN(afip) || isNaN(pais)) {
    return total;
  } else {
    return sumaTotal;
  }
}
// Funciones para mostrar y ocultar elementos con jQuery (siempre con "#")
export function jQueryMostrar(elemento, EventoDisparador) {
  $(elemento).ready(function () {
    $(EventoDisparador).on("click", function () {
      $(elemento).show(); //muestro mediante id
    });
  });
}
export function jQueryOcultar(elemento, EventoDisparador) {
  $(elemento).ready(function () {
    $(EventoDisparador).on("click", function () {
      $(elemento).hide(); //muestro mediante id
    });
  });
}

export function jQueryAnimacionConcatenada(contenedor, elemento, elemento2, elemento3, elemento4, EventoDisparador) {
  $(elemento).ready(function () {
    $(EventoDisparador).on("click", function () {
      $(contenedor).hide();
      $(elemento).fadeOut("fast"); 
      $(elemento2).fadeOut("fast");
      $(elemento3).fadeOut("fast");
      $(elemento4).fadeIn(3000);
    });
  });
}
