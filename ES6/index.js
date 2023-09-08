const handler = {
    get: function(target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function(target, thisBinding, args) {
        return args[0];
    },

    construct: function(target, args) {
        console.log('args', args)
        return {value: args[1]};
    }
};

const fproxy = new Proxy(function(x, y) {
    return x + y;
}, handler);
console.log('fproxy', fproxy)
const res = fproxy(1, 2) // 1
console.log('res', res)
new fproxy(1, 2) // {value: 2}
console.log(fproxy.prototype === Object.prototype)// true
console.log(fproxy.foo === "Hello, foo") // true
