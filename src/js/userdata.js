// @flow
export default class User {
  name = 'The'
  constructor() {
    this.name = `${this.name} Release`
  }

  static method(): number {
    return 1
  }
}
