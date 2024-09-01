import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class PowerOfThreeWithSumSequence extends Sequence {
  constructor() {
    super();
    const seed = Random.get() % 15 + 1; 
    
    const first = seed; 
    const second = Math.pow(first, 2) + 1; 
    const third = Math.pow(second, 2) + 1; 
    const fourth = Math.pow(third, 2) + 1; 
    
    this.values = [first, second, third, fourth]; 
  }
}
