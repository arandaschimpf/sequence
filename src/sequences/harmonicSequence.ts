import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class HarmonicSequence extends Sequence {
  constructor() {
    super();
    let seed = Random.get();
    //si la semilla es igual a cero la seteo a 1 para evitar division por cero
    if(seed === 0) {
        this.values = [1, (1 / (seed + 1)),  (1 / (seed + 2)),  (1 / (seed + 3))];
    } else {
        this.values = [(1 / (seed)), (1 / (seed + 1)),  (1 / (seed + 2)),  (1 / (seed + 3))];
    }
    
  }
}

/* const sequence = new HarmonicSequence();
console.log(sequence.values);  */