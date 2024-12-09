import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class ArithmeticSequence extends Sequence {
  constructor() {
    super();
    const seed = Random.get();
    const difference = Random.get() % 10 + 1; 
    this.values = [
      seed,
      seed + difference,
      seed + 2 * difference,
      seed + 3 * difference
    ];
  }
}
