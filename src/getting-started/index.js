const typeioc = require('typeioc');

class SimpleClass {

    constructor(notSoSimple) {
      this._notSoSimple = notSoSimple;
    }

    get name() {
        return `Simple : ${this._notSoSimple.name}`;
    }
}

class NotSoSimpleClass {
    get name() {
        return 'Not So Simple';
    }
}

const builder = typeioc.createBuilder();
builder.register(NotSoSimpleClass)
.as(() => new NotSoSimpleClass());

builder.register(SimpleClass)
.as((c) => {
    const notSoSimple = c.resolve(NotSoSimpleClass);
    return new SimpleClass(notSoSimple);
});

const container = builder.build();
const instance = container.resolve(SimpleClass);

module.exports = instance.name
