const {
  builder: createBuilder,
  interceptor: createInterceptor,
  callInfo
} = require('typeioc');

class CalcAdd {
    get a() {
        return this._a;
    }

    set a(value) {
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;;
    }

    add() {
        return this.a + this.b;
    }
}

const interceptor = createInterceptor();

const calcAddIntercepted = interceptor
.intercept(new CalcAdd(), [{
  method: 'a',

  // intercept 'a' getter
  type: callInfo.getter,

  // invoke getter in the context of original object
  wrapper: (callInfo) => callInfo.get() + callInfo.source.b
}, {
  method: 'add',

  // invoke original method
  wrapper: (callInfo) => callInfo.invoke()
}]);

const builder = createBuilder();

builder.register(CalcAdd)
.as(() => calcAddIntercepted);

builder.register(CalcAdd)
.as(() => new CalcAdd())
.named('original');

const container = builder.build();

const calcAddOriginal =
  container.resolveNamed(CalcAdd, 'original');
calcAddOriginal.a = 2;
calcAddOriginal.b = 3;

const calcAdd = container.resolve(CalcAdd);
calcAdd.a = 2;
calcAdd.b = 3;

const result = `Original: ${calcAddOriginal.add()}; Intercepted: ${calcAdd.add()}`;

module.exports = result
