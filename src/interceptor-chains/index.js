const { interceptor: createInterceptor, callInfo } = require('typeioc');

const interceptor = createInterceptor();

const math = interceptor.intercept(Math, [{
    	wrapper: (callInfo) => callInfo.next(`${callInfo.result} 2`)
    }, {
        method: 'pow',
        type: callInfo.method,
        wrapper : (callInfo) => callInfo.next(callInfo.args[0] + callInfo.args[1])
    }, {
        type: callInfo.method,
        wrapper : (callInfo) => `${callInfo.result} 3`
    }, {
        method: 'pow',
        wrapper : (callInfo) => callInfo.next(`${callInfo.result} 1`)
    }, {
        method: 'round',
        wrapper : (callInfo) => callInfo.next(callInfo.args[0])
}]);

const result = `math.pow(2, 3) is "${math.pow(2, 3)}"; math.round(5.777) is "${math.round(5.777)}"`

module.exports = result
