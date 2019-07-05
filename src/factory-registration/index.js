const typeioc = require('typeioc');

class AClass {

    get name() {
        return 'A';
    }
}

class BClass {

    constructor(aClass){
        this.aClass = aClass;
    }

    get name() {
        return `${this.aClass.name} B`;
    }
}

class CClassBase {
    get name() { return null; }
}

class CClass extends CClassBase {

    constructor(p1,p2, p3) {
          super();
          this.p1 = p1;
          this.p2 = p2;
          this.p3 = p3;
    } // these parameters will be passed as part of factory resolution

    get name() {
        return `C ${this.p1} ${this.p2} ${this.p3}`;
    }
}

const builder = typeioc.builder();
builder.register('A Class')
    .as(() => new AClass());

builder.register('B Class')
    .as((c) => {
        const a = c.resolve('A Class');
        return new BClass(a);
    });

builder.register(CClassBase)
    .as((c, p1, p2, p3) => new CClass(p1, p2, p3));

const container = builder.build();
const b = container.resolve('B Class');
const c = container.resolve(CClassBase, 1, 2, 3);

const result = `${b.name} ${c.name}`

module.exports = result
