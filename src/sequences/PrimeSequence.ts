import Sequence from "../Sequence"
import Random from "../utils/Random"

export default class PrimeSequence extends Sequence {
    constructor() {
        super()
        const seed = Random.get()
        const primes = this.getPrimes(seed)
        this.values = [primes[0], primes[1], primes[2], primes[3]]
    }

    // method to check if a number is prime
    private checkPrime(n: number) {
        if (n <= 1) {
            return false
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }

    // method to get the next prime number
    private nextPrime(n: number) {
        let next = n + 1
        while (!this.checkPrime(next)) {
            next++
            // if the number is greater than 997, return 2
            if (next > 997) {
                next = 2
            }

        }
        return next
    }
    // return an array of 4 prime numbers
    private getPrimes(seed: number): number[] {
        while (!this.checkPrime(seed)) {
            seed++
        }
        const primes = [seed]
        for (let i = 0; i < 3; i++) {
            primes.push(this.nextPrime(primes[i]))
        }
        return primes
    }
}