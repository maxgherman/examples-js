const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {
	test.equals(result, 'Circular dependency for service: Service A')
	test.done()
})
