// @flow
class User {
  name = 'sta'
  constructor() {
    this.name = `${this.name} woman`
  }

  static weird(): number {
    return 2
  }
}

export default new User()
