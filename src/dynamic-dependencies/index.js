const typeioc = require('typeioc');

class ABase {
}

class A extends ABase {
    get name() {
        return 'A';
    }
}

class B {
    constructor(d) {
        this.d = d;
    }

    get name() {
        return `B : ${this.d.name}`;
    }
}

const substitute = (value) => ({
    name: value
});

const builder = typeioc.builder();
builder.register(ABase).asType(A);
builder.register('B1').asType(B, ABase);
builder.register('B2').as((c) => new B(c.resolve(ABase)));

const container = builder.build();

const b1 = container.resolve('B1');
const b2 = container.resolveWithDependencies('B1', [{
    service: ABase,
    factory: () => substitute('A - Substitute 1')
}]);

const b3 = container.resolveWithDependencies('B2', [{
    service: ABase,
    factory: () => substitute('A - Substitute 2')
}]);

const result = `${b1.name} ${b2.name} ${b3.name}`

module.exports = result
