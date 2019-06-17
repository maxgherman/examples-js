const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, 'A: 6; B: 3')
	test.done()
})
