import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class BaseDos extends Sequence {
  constructor() {
    super();
    const exponente = Math.floor(Random.get());
    this.values = [Math.pow(2, exponente), Math.pow(2, exponente + 1), Math.pow(2, exponente + 2), Math.pow(2, exponente + 3)];
  }
}