const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, 'A B C')
	test.done()
})
