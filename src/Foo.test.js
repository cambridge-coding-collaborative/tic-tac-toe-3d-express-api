import {getFoo, Person} from './Foo'

describe('function tests', () => {
  it('returns Foo', () => {
    expect(getFoo()).toMatch(/Foo/)
  })
})

describe('person class tests', () => {
  it('full name returns correct value', () => {
    const p = new Person('John', 'Smith')
    expect(p.fullName()).toStrictEqual('John Smith')
  })
})

