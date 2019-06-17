const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, '0, 1, 1, 2, 3, 5, 8, 13, 21, 34')
	test.done()
})
