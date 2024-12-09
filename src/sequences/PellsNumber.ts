import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class PellsNumber extends Sequence {
  constructor() {
    super();
    const seed = Math.floor(Random.get());
    this.values = [
        (Math.pow(1 + Math.sqrt(2), seed) - Math.pow(1 - Math.sqrt(2), seed)) / (2 * Math.sqrt(2)),
        (Math.pow(1 + Math.sqrt(2), seed + 1) - Math.pow(1 - Math.sqrt(2), seed + 1)) / (2 * Math.sqrt(2)),
        (Math.pow(1 + Math.sqrt(2), seed + 2) - Math.pow(1 - Math.sqrt(2), seed + 2)) / (2 * Math.sqrt(2)),
        (Math.pow(1 + Math.sqrt(2), seed + 3) - Math.pow(1 - Math.sqrt(2), seed + 3)) / (2 * Math.sqrt(2)),
      ];
  }
}