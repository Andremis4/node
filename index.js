console.log("Gege vas a pagar");

const { registrar, leer } = require("./operaciones");
const [operacion, nombreMascota, edad, tipoDeMascota, colorDeMascota, enfermedad] =
  process.argv.slice(2);


console.log(operacion);

if(operacion === "registrar"){
    registrar(nombreMascota, edad, tipoDeMascota, colorDeMascota, enfermedad)
    }
    if(operacion === "leer"){
    leer()
    }
    