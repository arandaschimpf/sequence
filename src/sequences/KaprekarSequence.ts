import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class KaprekarSequence extends Sequence{
    constructor(){
        super();
        const seed = Random.get()*10; //multiply by 10 to get 4 digits
        const kprk = this.generateKaprekar(seed);
        this.values = [kprk[0], kprk[1], kprk[2], kprk[3]]
    }

    private FourDigitToArray(seed: number): number[]{
        return seed.toString().padStart(4, '0').split('').map(Number);
    }

    private ArrayToFourDigit(array: number[]): number{
        return parseInt(array.map(String).join(''));
    }

    private generateKaprekar(seed: number): number[]{
        let kaprekar: number[] = []; // declare a new num list
        kaprekar.push(seed); //the seed will be the first number - [0]
        let base = this.FourDigitToArray(seed); //convert the seed to a 4 digit array
        for (let i = 0; i < 3; i++) {
            //sort the array ascendigly to get the smallest number
            const min_number = this.ArrayToFourDigit(base.sort((a, b) => a - b));
            //sort the array descendigly to get the greatest number
            const max_number = this.ArrayToFourDigit(base.sort((a, b) => b - a));
            //get the difference
            const next = max_number-min_number;
            //push it so it's the next number to its base
            kaprekar.push(next);
            //move the base to the last pushed number and convert to array
            base = this.FourDigitToArray(next); // this.FourDigitToArray(kaprekar[i+1]) ALSO WORKS
        }
        return kaprekar;
    }
}