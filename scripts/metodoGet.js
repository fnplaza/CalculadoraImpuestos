const localJson = "./models/monedas.json";
$.get(localJson, (respuesta, status) => {
  if (status === "success") {
    for (let moneda of respuesta) {
      $("#DivisaOrigen").append(
        `<option value=${JSON.parse(moneda.value)}>${JSON.stringify(moneda.nombre).replace(/["']/g, "")}</option>`
      );
    }
  } else {
    console.log("Nothing! :(");
  }
});
