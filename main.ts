import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaSheila = new Direccion(
  "Carrer del Bages",
  14,
  7,
  "C",
  08192,
  "Sant quirze del vallès",
  "Barcelona"
)

const segundaResidenciaSheila = new Direccion(
  "Calle Desfiladero de los Arrudos",
  4,
  false,
  false,
  33212,
  "Gijón",
  "Asturias"
)

const mailSheila = new Mail(
  "personal",
  "correosheila@gmail.com"
)

const telefonoFijoSheila = new Telefono(
  "fijo",
  937498333
)

const telefonoMovilSheila = new Telefono(
  "movil",
  663889238
)

const datosSheila = new Persona(
  'Sheila',
  'Lopez Murillo',
  23,
  '47474747G',
  new Date(1999, 3, 4),
  'lila',
  'mujer',
  [primeraResidenciaSheila, segundaResidenciaSheila],
  [mailSheila],
  [telefonoFijoSheila, telefonoMovilSheila],
  "Trabaja en la localidad de la primera residencia"
);

const primeraResidenciaMarc = new Direccion(
  "Carrer del Kurdistan",
  3,
  4,
  "b",
  08805,
  "sabadell",
  "Barcelona"
)

const segundaResidenciaMarc = new Direccion(
  "Carrer de Màrius Torres",
  21,
  2,
  "D",
  08173,
  "Sant Cugat del Vallès",
  "Barcelona"
)

const mailPersonalMarc = new Mail(
  "personal",
  "correoejemplomarc@hotmail.com"
)

const mailTrabajoMarc = new Mail(
  "personal",
  "correotrabajomarc@gmail.com"
)

const telefonoFijoMarc = new Telefono(
  "fijo",
  984768934
)

const telefonoMovilMarcPersonal = new Telefono(
  "movil",
  774893474
)

const telefonoMovilMarcTrabajo = new Telefono(
  "movil",
  66002284
)

const datosMarc = new Persona(
  'Marc',
  'Hernandez Cortes',
  21,
  '89892834E',
  new Date(1991, 5, 4),
  'azul',
  'hombre',
  [primeraResidenciaMarc, segundaResidenciaMarc],
  [mailPersonalMarc, mailTrabajoMarc],
  [telefonoFijoMarc, telefonoMovilMarcPersonal, telefonoMovilMarcTrabajo],
  "Tiene la segunda residencia alquilada todo el año"
);

const primeraResidenciaPilar = new Direccion(
  "Calle de los Arenales",
  1,
  6,
  "C",
  46530,
  "Puçol",
  "Valencia"
)

const segundaResidenciaPilar = new Direccion(
  "Carrer de Misser Rufet",
  8,
  1,
  "A",
  08720,
  "Vilafranca del Penedès",
  "Barcelona"
)

const mailPersonalPilar = new Mail(
  "personal",
  "correopersonalpilar@gmail.com"
)

const mailTrabajoPilar = new Mail(
  "trabajo",
  "correopilartrabajo@hotmail.es"
)

const telefonoFijoPilar = new Telefono(
  "fijo",
  987364788
)

const telefonoMovilPilar = new Telefono(
  "movil",
  669830273
)

const datosPilar = new Persona(
  'Pilar',
  'Bermúdez Diaz',
  53,
  '78374938Q',
  new Date(1967, 0, 9),
  'rojo',
  'mujer',
  [primeraResidenciaPilar, segundaResidenciaPilar],
  [mailPersonalPilar, mailTrabajoPilar],
  [telefonoFijoPilar, telefonoMovilPilar],
  "La segunda residencia es de alquiler"
);

console.log("Contactos antes del cambio:");
console.log(datosSheila);
console.log(datosMarc);
console.log(datosPilar);

const agenda: Array<Persona> = new Array(datosSheila, datosMarc, datosPilar);

const dniABuscar: string = "89892834E";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle las eras",
  35,
  1,
  false,
  44792,
  "Josa",
  "Teruel"
)

const nuevoMail = new Mail(
  "trabajo",
  "nuevocorreomarc@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fijo",
  98765645
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosSheila);
console.log(datosMarc);
console.log(datosPilar);
