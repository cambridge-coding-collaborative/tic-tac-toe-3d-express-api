function getFoo () {
  return 'Foo!'
}

function sayHello (name) {
  return 'Hello ' + name
}

class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName () {
    return this.firstName + ' ' + this.lastName
  }
}

export {getFoo, sayHello, Person}
