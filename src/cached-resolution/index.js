const typeioc = require('typeioc');

class A {
    get name() { return 'A'; }
}

class B {
    get name() { return 'B'; }
}

const builder = typeioc.builder();
builder.register('A')
    .as(()=> new A());
builder.register('B')
    .as(() => new B())
    .named('b1');

const c = { name: 'C' };

builder.register(c).asValue(c);

const container = builder.build();
const a1 = container
    .resolveWith('A')
    .cache('a1')
    .exec();
const b1 = container
    .resolveWith('B')
    .name('b1')
    .cache()
    .exec();

const c1 = container
    .resolveWith(c)
    .cache()
    .exec();

const a2 = container.cache.instance.a1;
const b2 = container.cache.instance.b1;
const c2 = container.cache.resolve('C');

const result = `${a1.name} ${b1.name} ${c1.name} ${a2.name} ${b2.name} ${c2.name}`;

module.exports = result
