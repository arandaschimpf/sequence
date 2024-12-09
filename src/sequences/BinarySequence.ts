import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class BinarySequence extends Sequence {
  constructor() {
    super();
    const base = Random.get();
    var num : string[] = [];
    for (var i = base; i <= 3+base; i++) {
        num.push(i.toString(2));
    }

    this.values = [parseInt(num[0],2), parseInt(num[1],2), parseInt(num[2],2), parseInt(num[3],2)];
    
  }
}