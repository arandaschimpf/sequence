import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class SecuenciaPersonalizada extends Sequence {
    constructor() {
        super();
        const seed = Random.get();
        this.values = this.generateSquares(seed, 4); // Generar 4 cuadrados a partir de la semilla
    }

    private generateSquares(seed: number, count: number): [number, number, number, number] {
        const squares: number[] = [];
        for (let i = 0; i < count; i++) {
            squares.push((seed + i) ** 2); // Almacena el cuadrado de cada número
        }
        while (squares.length < 4) {
            squares.push(0); 
        }
        return squares as [number, number, number, number];
    }
}
