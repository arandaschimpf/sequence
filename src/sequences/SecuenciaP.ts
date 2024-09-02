import readline from 'readline';

abstract class Sequence implements ISequence {
  protected values: [string, string, string, string] = ["", "", "", ""];

  constructor() {}

  get value0() {
    return this.values[0];
  }

  get value1() {
    return this.values[1];
  }

  get value2() {
    return this.values[2];
  }

  get value3() {
    return this.values[3];
  }

  isSolution(candidate: string) {
    // Verificar si la letra faltante es igual a la respuesta del usuario
    return candidate === this.getMissingLetter();
  }

  abstract getMissingLetter(): string;

  // Método público para obtener los valores
  getValues() {
    return this.values;
  }
}

export interface ISequence {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  isSolution(candidate: string): boolean;
}

export default class AlphabetSequence extends Sequence {
  constructor() {
    super();
    this.generateRandomSequence();
  }

  private generateRandomSequence() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * (alphabet.length - 3));
    const startCharCode = alphabet.charCodeAt(randomIndex);

    this.values = [
      String.fromCharCode(startCharCode),
      String.fromCharCode(startCharCode + 1),
      "_", // Dejar el tercer valor vacío para la letra faltante
      String.fromCharCode(startCharCode + 3)
    ];
  }

  getMissingLetter() {
    // La letra faltante es la que debería estar en la posición del "_"
    return String.fromCharCode(this.values[0].charCodeAt(0) + 2);
  }
}

// Creamos una instancia de AlphabetSequence
const sequence = new AlphabetSequence();

// Mostramos la secuencia con la letra faltante usando el nuevo método
console.log('Encuentre la letra faltante:', sequence.getValues().join(' '));

// Configuramos la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu solución: ', (answer) => {
  if (sequence.isSolution(answer)) {
    console.log('¡Correcto!');
  } else {
    console.log('Incorrecto. La letra faltante era:', sequence.getMissingLetter());
  }
  rl.close();
});
