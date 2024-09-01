export default class Random {
  static get() {
    return Math.floor(Math.random() * 1000)
  }

  static randomWithParams(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + 1) + 1
  }
}