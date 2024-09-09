// BLOCK ERNST, Andrew #36766
// Paradigmas de Programación - Ingeniería en Sistemas de Información
// Profesores: Martín Aranda y Emanuel Goette

import Sequence from "../Sequence";

// https://es.wikipedia.org/wiki/Copa_Am%C3%A9rica
// LA SECUENCIA SE BASA EN LOS CAMPEONES A PARTIR DEL 1979 HASTA LA ACTUALIDAD (2024). UN PAIS GANA EL TORNEO Y LOS DOS SIGUIENTES TORNEOS LOS GANA OTRO PAIS.

type GanadoresCopaAmerica = {
  anio: number;
  ganador: string;
};

const ganadoresCopaAmerica: GanadoresCopaAmerica[] = [
  {anio: 1979, ganador: "Paraguay"},
  {anio: 1983, ganador: "Uruguay"},
  {anio: 1987, ganador: "Uruguay"},
  {anio: 1989, ganador: "Brasil"},
  {anio: 1991, ganador: "Argentina"},
  {anio: 1993, ganador: "Argentina"},
  {anio: 1995, ganador: "Uruguay"},
  {anio: 1997, ganador: "Brasil"},
  {anio: 1999, ganador: "Brasil"},
  {anio: 2001, ganador: "Colombia"},
  {anio: 2004, ganador: "Brasil"},
  {anio: 2007, ganador: "Brasil"},
  {anio: 2011, ganador: "Uruguay"},
  {anio: 2015, ganador: "Chile"},
  {anio: 2016, ganador: "Chile"},
  {anio: 2019, ganador: "Brasil"},
  {anio: 2021, ganador: "Argentina"},
  {anio: 2024, ganador: "Argentina"},
];

export default class CoupeAmericaSequence extends Sequence {
  constructor() {
    super();
  }

  startGame() { // ANIO ALEATORIO PARA QUE NO SEA SIEMPRE EL MISMO ORDEN
    const start = Math.floor(Math.random() * (ganadoresCopaAmerica.length - 3));
    const primer = ganadoresCopaAmerica[start];
    const segundo = ganadoresCopaAmerica[start + 1];
    const tercer = ganadoresCopaAmerica[start + 2];
    const cuarto = ganadoresCopaAmerica[start + 3];

    // PRIMEROS DOS HINTS PARA SABER POR DONDE VIENE LA MANO DE LA SECUENCIA
    console.log(`GANADOR DEL ANIO ${primer.anio}: ${primer.ganador}`);
    console.log(`GANADOR DEL ANIO ${segundo.anio}: ${segundo.ganador}`);

    //INPUT DEL QUE JUEGA
    const inputJugador = prompt(
      `¿Quién crees que ganó en el año ${tercer.anio}?`
    );

    //COMPARACION DEL INPUT DEL JUGADOR CON EL GANADOR REAL
    if (inputJugador?.toLowerCase() === tercer.ganador.toLowerCase()) {
      console.log("BIEN PAPA, SEGUI ASI 😎");
    } else {
      console.log(`MMM FLOJITO. EL QUE LA LEVANTO FUE ${tercer.ganador}.`);
    }

    //ULTIMO HINT PARA SABER SI EL JUGADOR LE PEGO O NO
    console.log(`GANADOR DEL ANIO ${cuarto.anio}: ${cuarto.ganador}`);
  }
}
