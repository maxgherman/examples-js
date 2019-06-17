const tap = require('tap')
const result = require('.')

tap.test('returns all cases', (test) => {

	test.equals(result.length, 16)
	test.done()
})
