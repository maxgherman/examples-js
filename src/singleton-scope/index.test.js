const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, 'A: 2 - instances; B: 1 - instances')
	test.done()
})
