const typeioc = require('typeioc');

class ABase {
    get name() {
        return null;
    }
}

class A extends ABase {
    get name() {
        return 'A';
    }
}

class B {
    get name() {
        return 'B';
    }
}

function C(a, b) {
    this._name = 'C';
    this._a = a;
    this._b = b;
}

C.prototype.name = function() {
    return `${this._a.name} ${this._b.name} ${this._name}`;
}

const builder = typeioc.createBuilder();
builder.register(ABase).asType(A);
builder.register('B').asType(B);
builder.register(C).asType(C, ABase, 'B');

const container = builder.build();
const result = container.resolve(C);

module.exports = result.name()
