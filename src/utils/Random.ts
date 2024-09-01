export default class Random {
  static get() {
    return Math.floor(Math.random() * 100) + 1; // lo cambie de 1000 a 100
  }
}