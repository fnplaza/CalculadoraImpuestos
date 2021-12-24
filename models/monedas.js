let arrayMonedas = [
  {
    id: 1,
    nombre: "Euro",
    simbolo: "€",
    value: 114,
  },
  {
    id: 2,
    nombre: "Dolar Americano",
    simbolo: "U$S",
    value: 101,
  },
  {
    id: 3,
    nombre: "Libra Esterlina",
    simbolo: "£",
    value: 135,
  },
  {
    id: 4,
    nombre: "Yuan Chino",
    simbolo: "¥",
    value: 15,
  },
];
let arrayMonedaDestino = [
  {
    id: 1,
    nombre: "Peso Argentino",
    simbolo: "AR$",
    value: 1,
  },
];

sessionStorage.setItem("listaMonedasOrigen", JSON.stringify(arrayMonedas));
sessionStorage.setItem("listaMonedasDestino", JSON.stringify(arrayMonedaDestino));