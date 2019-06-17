const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {
	test.equals(result, 'A: 4 - instances; B: 2 - instances')
	test.done()
})
