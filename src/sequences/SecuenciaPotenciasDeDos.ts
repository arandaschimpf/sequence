import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class SecuenciaPotenciasDeDos extends Sequence {
  constructor() {
    super();
    const seed = Random.get();
    this.values = [seed, seed * 2, seed * 2**2 , seed * 2**3];
  }
}