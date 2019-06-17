const tap = require('tap')
const result = require('.')

tap.test('should return proper value', (test) => {
	test.equals(result, 'Original: 5; Intercepted: 8')
	test.done()
})
