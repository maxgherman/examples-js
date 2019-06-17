const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, 'initialized disposed')
	test.done()
})
