const fs = require("fs");

const jsonHelper = {
  leerArchivo: function (nombreArchivo) {
    return JSON.parse(fs.readFileSync("./" + nombreArchivo + ".json", "utf-8"));
  },
  escribirArchivo: function (nombreArchivo, datos) {
    fs.writeFileSync("./" + nombreArchivo + ".json", JSON.stringify(datos));
  },
};

module.exports = jsonHelper;
