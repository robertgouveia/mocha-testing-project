const assert = require('assert')
const rooster = require('../index')

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!'
      const result = Rooster.announceDawn()
      assert.ok(result == expected)
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const result = Rooster.timeAtDawn(12)
      assert.strictEqual(typeof result, 'string')
    })
    it('throws an error if passed a number less than 0', () => {
      assert.throws(() => { Rooster.timeAtDawn(-2) }, RangeError)
    })
    it('throws an error if passed a number more than 23', () => {
      assert.throws(() => { Rooster.timeAtDawn(25) }, RangeError)
    })
  })
})
