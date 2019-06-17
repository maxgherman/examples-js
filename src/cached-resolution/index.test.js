const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {
	test.equals(result, 'A B C A B C')
	test.done()
})
