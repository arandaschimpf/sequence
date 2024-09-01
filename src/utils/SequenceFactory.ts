import Sequence from "../Sequence";
import * as fs from 'fs';
import * as path from 'path';

export default class SequenceFactory {
  static async create(): Promise<Sequence> {
    try {
      const sequencesDir = path.join(__dirname, '../sequences');
      const sequenceFiles = fs.readdirSync(sequencesDir).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

      if (sequenceFiles.length === 0) {
        throw new Error("No sequence files found in the sequences directory.");
      }

      const index = Math.floor(Math.random() * sequenceFiles.length);
      const selectedFile = sequenceFiles[index];
      const filePath = path.join(sequencesDir, selectedFile);
      const { default: SequenceClass } = await import(filePath);

      if (!(SequenceClass.prototype instanceof Sequence)) {
        throw new Error(`The file ${selectedFile} does not export a class extending Sequence.`);
      }

      return new SequenceClass() as Sequence;
    } catch (error) {
      console.error("Error creating sequence:", error);
      throw error;
    }
  }
}
