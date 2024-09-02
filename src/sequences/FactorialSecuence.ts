import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class FactorialSequence extends Sequence {
  constructor() {
    super();
    
    // Selección de un número de inicio para calcular los factoriales
    const start = Random.get() % 5; // Elegimos un valor entre 0 y 4 para empezar

    // Generación de los primeros 4 factoriales a partir del número de inicio
    this.values = [
      this.factorial(start),
      this.factorial(start + 1),
      this.factorial(start + 2),
      this.factorial(start + 3)
    ];
  }

  // Función para calcular el factorial de un número
  private factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
