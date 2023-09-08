/**
 * 获取函数名称
 *
 * @param {Function} func 函数引用
 * @return {String} 函数名称
 */
function getFunctionName(func) {
    if ( typeof func == 'function' || typeof func == 'object' ) {
        var name = ('' + func).match(/function\s*([\w\$]*)\s*\(/);
    }
    return name && name[1];
}
if (!('console' in window)) {
    window.console = {};
}
if (!console.trace) {
    /**
     * 显示函数堆栈<br/>
     * 为了和Firebug统一，将trace方法添加到console对象中
     *
     * @param {Function} func 函数引用
     *
     * @example
     function a() {
b();
}
     function b() {
c();
}
     function c() {
d();
}
     function d() {
console.trace();
}
     a();
     */
    console.trace = function() {
        var stack = [],
            caller = arguments.callee.caller;
        while (caller) {
            stack.unshift(getFunctionName(caller));
            caller = caller && caller.caller;
        }
        alert('functions on stack:' + '\n' + stack.join('\n'));
    }
};

