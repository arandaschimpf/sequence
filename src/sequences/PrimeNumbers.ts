import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class PrimeNumbers extends Sequence { // es una secuencia de numeros primos
  constructor() {
    super();

    const seed = Random.get();
    this.values = this.generatePrimeNums(seed) as [number, number, number, number];
  }

  private generatePrimeNums(seed: number): number[] { // genera 4 numeros primos 
    const primes: number[] = []; 
    let currentNumber: number = seed;

    while (primes.length < 4) {
      if (this.isPrime(currentNumber)) {
        primes.push(currentNumber);
      }
      currentNumber++;
    }

    return primes;
  }

  private isPrime(num: number): boolean { // metodo para verificar si un numero es primo
    if (num <= 1) return false;
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }
}
