import SequenceFactory from "./src/utils/SequenceFactory";

async function testSequenceFactory() {
  try {
    const sequence = await SequenceFactory.create();
    console.log("Generated Sequence:", sequence);
    console.log("Values:", sequence.value0, sequence.value1, sequence.value3);
  } catch (error) {
    console.error("Error:", error);
  }
}

testSequenceFactory();
