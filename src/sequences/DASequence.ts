import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class DASequence extends Sequence {
  constructor() {
    super();
    const seed = Random.get();
    this.values = [(seed + 12) * 3, (seed + 9) * 6, (seed + 6) * 9, (seed + 3) * 12];
  }
}