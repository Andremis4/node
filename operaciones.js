const fs = require("fs");

const registrar = (nombreMascota, edad, tipoDeMascota, colorDeMascota, enfermedad) => {
  const datosMascota = {
    nombreMascota: nombreMascota ,
    edad: edad ,
    tipoDeMascota: tipoDeMascota ,
    colorDeMascota: colorDeMascota ,
    enfermedad: enfermedad
};
  const nuevoDato = JSON.parse(fs.readFileSync("registrar.json", 'utf8'));
/*   console.log("datos antes del push", datosMascota); */
  nuevoDato.push(datosMascota);
/*   console.log("datos despues del push", datosMascota); */
  fs.writeFileSync("registrar.json", JSON.stringify(nuevoDato));
};

const leer = () => {
    const nuevoDato = JSON.parse(fs.readFileSync("registrar.json", 'utf8'));
    console.log (nuevoDato);
}

module.exports = {registrar, leer};