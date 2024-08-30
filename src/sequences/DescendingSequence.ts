import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class DeltaSequence extends Sequence {
  constructor() {
    super();
    const start = ((seed => Math.ceil(seed / 12) * 12)(Random.get()));
    this.values = [start, start / 2, start / 4, start / 6];

  }
}