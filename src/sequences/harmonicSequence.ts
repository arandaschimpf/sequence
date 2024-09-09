import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class HarmonicSequence extends Sequence {
  constructor() {
    super();
    const numerosArmonicos: number[] = [];
    let suma = 0;

    let semilla = Random.get() // Obtenemos un número
    //console.log(semilla)
    for (let i = 1; i <= semilla + 4; i++) {
        suma += 1 / i; 
        numerosArmonicos.push(suma);
    }
    this.values = [numerosArmonicos[semilla -1], numerosArmonicos[semilla ], numerosArmonicos[semilla + 1], numerosArmonicos[semilla + 2]];
  }
}
/* 
const sequence = new HarmonicSequence();
console.log(sequence.values);  */