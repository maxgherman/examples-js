import * as typeioc from 'typeioc';

const builder = typeioc.createBuilder();
builder.register('A')
.as((_c, value) => ({ a: value }));

builder.register('B')
.as(() => ({ b: 'b' }))
.named('B1');

const container = builder.build();

const a = container.resolve('A', 'a');
const b = container.resolveNamed('B', 'B1');
const c = container.tryResolve('C');

const b1 = container.resolveWith('B')
.attempt()
.name('B1')
.exec();

const result = `${a.a} ${b.b} ${c} ${b1.b}`;

export default result