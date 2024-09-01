import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class NormalSequence extends Sequence {
  constructor() {
    super();
    const seed = Math.floor(Random.get() / 125);
    this.values = [seed, (seed + 1) * (seed + 1), (seed + 2) * (seed + 2) * (seed + 2), (seed + 3) * (seed + 3) * (seed + 3) * (seed + 3)];
  }
}