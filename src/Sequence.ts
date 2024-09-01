export default abstract class Sequence implements ISequence {
  protected values: [number, number, number, number] = [0, 0, 0, 0]

  constructor() {}

  get value0() {
    return this.values[0]
  }

  get value1() {
    return this.values[1]
  }

  get value3() {
    return this.values[3]
  }

  isSolution(candidate: number) {
    return this.values[2] === candidate
  }
}

export interface ISequence {
  value0: number
  value1: number
  value3: number
  isSolution(candidate: number): boolean
}



export class FibonacciSequence extends Sequence {
  constructor() {
    super()
    this.values[0] = 0;
    this.values[1] = 1;
    this.values[2] = this.values[0] + this.values[1];
    this.values[3] = this.values[1] + this.values[2];
}
}