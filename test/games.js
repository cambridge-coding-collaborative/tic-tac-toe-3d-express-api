const {getThree} = require('../app/misc/foo');

var assert = require('assert')
describe('Basic Mocha String Test', function () {
  it('should return number of charachters in a string', function () {
    assert.strictEqual('Hello'.length, 5)
  })
  it('should return first charachter of the string', function () {
    assert.strictEqual('Hello'.charAt(0), 'H')
  })
})

describe('Foo test', function () {
  console.log(getThree)
  it('getThree should return three', function () {
    assert.strictEqual(getThree(), 3)
  })
})
