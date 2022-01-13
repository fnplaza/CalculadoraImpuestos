// !Funciones Importadas desde "script.js"
import {
  validaCheckboxPAIS,
  validaCheckboxAFIP,
  validadorTotalitario,
  multiplicarMon,
  resultadovalido,
  jQueryOcultar,
  jQueryAnimacionConcatenada,
  validarNum,
} from "./script.js";
// !Funciones importadas desde dark-mode-switch.js (Modo Oscuro con Storage)
import { initTheme, resetTheme } from "./dark-mode-switch.js";
// ***********************************************************
// *                    SessionStorage                       *
// ***********************************************************
//MonedasOrigen
class ClaseMonedas {
  constructor(obj) {
    this.id = obj.id;
    this.nombre = obj.nombre;
    this.simbolo = obj.simbolo;
    this.value = obj.value;
  }
}
const listArrayMonedas = JSON.parse(
  sessionStorage.getItem("listaMonedasOrigen")
);
const arrayMonedas = [];
for (let money of listArrayMonedas) arrayMonedas.push(new ClaseMonedas(money));
//MonedaDestino
class MonedaDestino {
  constructor(dest) {
    this.id = dest.id;
    this.nombre = dest.nombre;
    this.simbolo = dest.simbolo;
    this.value = dest.value;
  }
}
const parseMonedasDestino = JSON.parse(
  sessionStorage.getItem("listaMonedasDestino")
);
const arrayMonedaDestino = [];
for (let moneyOut of parseMonedasDestino)
  arrayMonedaDestino.push(new MonedaDestino(moneyOut));
// ***********************************************************
// *                    Cargar DOM                           *
// ***********************************************************
// !Nav
const nav = document.querySelector("#navPadre");
nav.innerHTML = `<div class="container-fluid">
<button
  class="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarTogglerDemo3"
  aria-controls="navbarTogglerDemo3"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand" href="#">Simulador</a>
<div class="collapse navbar-collapse show" id="navbarTogglerDemo3">
  <ul class="navbar-nav me-auto mb-2 mb-xl-0">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Inicio</a>
    </li>
    <li class="nav-item">
      <!--<a class="nav-link" href="#">Cotizacion TR</a>-->
    </li>
  </ul>
  <div class="form-check form-switch">
  <input type="checkbox" class="form-check-input" id="darkSwitch" />
  <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
  </div>
</div>
</div>`;
// !Header
const header = document.querySelector("#header");
header.innerHTML = `<div class="justify-content-center" id="textoTitulo"></div>
<div>
  <blockquote class="blockquote-footer"></blockquote>
</div>`;
// Titulo Central
const textoTitulo = document.querySelector("#textoTitulo");
textoTitulo.innerHTML = "<h1>Simulador Costos Compras en el Extranjero</h1>";
// Resumen finalidad de la web
const subTitulo = document.querySelector(".blockquote-footer");
subTitulo.innerHTML =
  "<p>Hemos desarrollado esta herramienta de conversión para aquellas personas que necesitan calcular el valor de diferentes divisas con datos actualizados, se añadió la posibilidad de calcular impuesto (PAIS-AFIP), en caso de Argentina.</p>";
// !Section Streaming
const sectionStreaming = document.querySelector("#sectionStreaming");
sectionStreaming.innerHTML = `      <div class="d-flex justify-content-center mb-1"><h5>Calculadora Streaming</h5></div><div class="d-flex justify-content-center">
<div class="text-center md-4 mb-3">
  <img src="./images/png-transparent-netflix-thumbnail.png" alt="netflix" width="150" class="img-fluid" id="imgNetflix">
  <img src="./images/png-transparent-spotify.png" alt="spotify" width="150" class="img-fluid" id="imgSpotify">
</div>
</div>`;
// !Section Central
const sectionCentral = document.querySelector("#sectionCentral");
sectionCentral.innerHTML = `      <div class="d-flex justify-content-center" >
<div class="col-6">
  <form action="" id="FormularioCompleto">
    <form>
      <!--Inserta Precio Articulo-->
      <div class="form-floating mb-3" id="contenedorPrecio">
        <input
          type="number"
          class="form-control"
          id="InputPrecio"
          placeholder="123"
        />
        <label for="floatingInput">Precio</label>
      </div>
      <!--Selecciona divisa origen-->
      <div class="form-floating mb-3">
        <select
          class="form-select"
          aria-label="Default select"
          id="DivisaOrigen"
        ></select>
      </div>
      <!--Selecciona divisa destino-->
      <div class="form-floating mb-3">
        <select
          class="form-select"
          aria-label="Default select"
          id="DivisaDestino"
        ></select>
      </div>
      <!--Selecciona si quiere incluir impuestos-->
      <div class="d-flex justify-content-center form-floating mb-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkboxImpuestoPAIS"
          />
          <label class="form-check-label" for="checkboxImpuestoPAIS"
            >Impuesto PAIS</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkboxImpuestoAFIP"
            checked=""
          />
          <label class="form-check-label" for="checkboxImpuestoAFIP"
            >Impuesto AFIP</label
          >
        </div>
      </div>
      <!--Botones-->
      <div class="botones d-flex justify-content-center mb-3">
        <button class="btn btn-primary" id="botonConvertir">
          Convertir
        </button>
        <button
          class="btn btn-secondary"
          id="botonRecargar"
        >
          Recargar
        </button>
      </div>
      <!--Resultado-->
      <div id="resultado" class="row" style="display: none;">
        <label class="form-check-label" for="resultadoTotal">Total</label>
        <input type="text" id="resultadoTotal" />        
        <label class="form-check-label" for="resultadoAFIP">Impuesto AFIP</label>
        <input type="text" id="resultadoAFIP" />        
        <label class="form-check-label" for="resultadoPAIS">Impuesto PAIS</label>
        <input type="text" id="resultadoPAIS" />
      </div>
    </form>
  </form>
</div>
</div>`;
// !Footer
const footer = document.querySelector("#footer");
// !DivisaOrigen
/*
const selectOrigen = document.querySelector("#DivisaOrigen");
const fragment = document.createDocumentFragment();
for (let monedaExtranjera of arrayMonedas) {
  const selectItem = document.createElement("option");
  selectItem.setAttribute("value", monedaExtranjera.value);
  selectItem.textContent = monedaExtranjera.nombre;
  fragment.appendChild(selectItem);
}
selectOrigen.appendChild(fragment);*/
// !DivisaDestino
const selectDestino = document.querySelector("#DivisaDestino");
const fragment2 = document.createDocumentFragment();
for (let monedaLocal of arrayMonedaDestino) {
  const selectItem2 = document.createElement("option");
  selectItem2.setAttribute("value", monedaLocal.value);
  selectItem2.textContent = monedaLocal.nombre;
  fragment2.appendChild(selectItem2);
}
selectDestino.appendChild(fragment2);
// ***********************************************************
// *                    Eventos                              *
// ***********************************************************
// ValorStreaming
$("#imgNetflix").one("click", function () {
  let valorNetflix = 4;
  valorNetflix = parseInt(valorNetflix);
  document.getElementById("InputPrecio").value = valorNetflix;
  $("#sectionStreaming").append(
    `<div id="usaDolares" class="text-center alert alert-warning" role="alert">Recuerda elegir "DOLARES AMERICANOS"</div>`
  );
});
$("#imgSpotify").one("click", function () {
  let valorSpotify = 2;
  valorSpotify = parseInt(valorSpotify);
  document.getElementById("InputPrecio").value = valorSpotify;
  $("#sectionStreaming").append(
    `<div id="usaDolares" class="text-center alert alert-warning" role="alert">Recuerda elegir "DOLARES AMERICANOS"</div>`
  );
});
// BotonConvertir
let boton = document.getElementById("botonConvertir");
boton.addEventListener("click", () => {
  event.preventDefault();
  let inputUsuario = document.getElementById("InputPrecio").value;
  let divisaOrig = document.getElementById("DivisaOrigen");
  let valorDivisaOrigen = divisaOrig.options[divisaOrig.selectedIndex].value;
  let divisaDest = document.getElementById("DivisaDestino");
  let valorDivisaDest = divisaDest.options[divisaDest.selectedIndex].value;
  inputUsuario = validarNum(inputUsuario);
  inputUsuario = parseInt(inputUsuario);
  valorDivisaOrigen = parseInt(valorDivisaOrigen);
  valorDivisaDest = parseFloat(valorDivisaDest);
  let resultado = multiplicarMon(inputUsuario, valorDivisaOrigen);
  let totalcito = resultadovalido(resultado);
  document.getElementById("resultadoTotal").value = validadorTotalitario(
    totalcito,
    validaCheckboxAFIP(totalcito),
    validaCheckboxPAIS(totalcito)
  );
  let checkboxImpuestoPAIS = document.getElementById("checkboxImpuestoPAIS");
  let checkboxImpuestoAFIP = document.getElementById("checkboxImpuestoAFIP");
  validaCheckboxPAIS(totalcito);
  document.getElementById("resultadoPAIS").value = resultadovalido(
    validaCheckboxPAIS(totalcito)
  );
  validaCheckboxAFIP(totalcito);
  document.getElementById("resultadoAFIP").value = resultadovalido(
    validaCheckboxAFIP(totalcito)
  );
});
// jQueryMostrar("#InputPrecio", "#botonConvertir");
jQueryAnimacionConcatenada(
  "#contenedorPrecio",
  "#DivisaOrigen",
  "#InputPrecio",
  "#DivisaDestino",
  "#resultado",
  "#botonConvertir"
); // Oculta todos los campos de form y muestra el resultado
// BotonRecargar
let botonRecargar = document.getElementById("botonRecargar");
botonRecargar.onclick = () => {
  document.getElementById("FormularioCompleto").reset();
};
jQueryOcultar("#resultado", "#botonRecargar");
// ***********************************************************
// *                       DarkMode                          *
// ***********************************************************
var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});
