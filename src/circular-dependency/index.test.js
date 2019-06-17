const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {
	test.ok(result.startsWith('Circular dependency for service: class A{constructor'))
	test.done()
})
