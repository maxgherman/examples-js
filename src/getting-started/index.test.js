const tap = require('tap')
const result = require('.')

tap.test('should return proper name', (test) => {

	test.equals(result, 'Simple : Not So Simple')
	test.done()
})
