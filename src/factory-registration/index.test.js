const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {
	test.equals(result, 'A B C 1 2 3')
	test.done()
})
