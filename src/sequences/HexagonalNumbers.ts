import Sequence from "../Sequence";
import Random from "../utils/Random";

// https://es.wikipedia.org/wiki/Número_hexagonal#:~:text=Los%20primeros%20números%20hexagonales%20(sucesión,5º%2C%207º%2C%20etc.)
export default class HexagonalNumbersSequence extends Sequence {
  constructor() {
    super();
    // This random number is not the number from which the sequence starts, but the nth number in the sequence
    const start = Random.get() + 1;
    // n(2n-1)
    this.values = [
      start * (2 * start - 1),
      (start + 1) * (2 * (start + 1) - 1),
      (start + 2) * (2 * (start + 2) - 1),
      (start + 3) * (2 * (start + 3) - 1),
    ];
  }
}
