import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class PistonSequenceI4 extends Sequence {
  constructor() {
    super();
    this.values = [1, 3, 4, 2]; // Piston firing sequence for a inline 4 engine
  }
}