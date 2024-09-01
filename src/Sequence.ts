class ArithmeticSequence {
  private start: number;
  private difference: number;
  private length: number;

  constructor(start: number, difference: number, length: number) {
      this.start = start;
      this.difference = difference;
      this.length = length;
  }

  public generateSequence(): number[] {
      const sequence: number[] = [];

      for (let i = 0; i < this.length; i++) {
          sequence.push(this.start + i * this.difference);
      }

      return sequence;
  }
}