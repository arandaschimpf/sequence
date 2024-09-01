import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class PistonSequenceI6 extends Sequence {
  constructor() {
    super();
    const order = [1, 5, 3, 6, 2, 4] // Piston firing order for a inline 6 engine
    let selectedNumbers: [number, number, number, number] = [0, 0, 0, 0];
    let seed = Random.randomWithParams(1, 6) - 1;
    for(let i = 0; i < 4; i++) {
      if(seed > 5){
        seed -= 6
      }
      selectedNumbers[i] = order[seed]
      seed ++
    }
    this.values = selectedNumbers;
  }
}