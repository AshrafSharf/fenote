console.log('//0105//////////////////////////////');
console.log('Javascript: The Good Parts');

/*
 * BOOK
 * chapter: Objects
 *

```javascript

数组字面量
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
empty[1]          // undefined
numbers[1]        // 'one'
empty.length      // 0
numbers.length    // 10
====================================
var numbers_object = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};
====================================
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];
misc.length    // 10
====================================
====================================
====================================
长度
var myArray = [];
myArray.length             // 0
myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.
====================================
numbers.length = 3;
// numbers is ['zero', 'one', 'two']
====================================
numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']
====================================
numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']
====================================
====================================
====================================
删除
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];
delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']
====================================
numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']
var myArray = [];
myArray.length             // 0
myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.

var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]);
}
====================================
====================================
====================================
枚举
var myArray = [];
myArray.length             // 0
myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.
var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]);
}
====================================
====================================
====================================
容易混淆的地方
var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};
====================================
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object
Array]';
};
====================================
====================================
====================================
方法
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});
====================================
// Create an array of numbers.
var data = [4, 8, 15, 16, 23, 42];
// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.
var add = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};
// Invoke the data's reduce method, passing in the
// add function.
var sum = data.reduce(add, 0);    // sum is 108
// Invoke the reduce method again, this time passing
// in the multiply function.
var product = data.reduce(mult, 1);
    // product is 7418880
====================================
// Give the data array a total function.
data.total = function (  ) {
    return this.reduce(add, 0);
};
total = data.total(  );    // total is 108
====================================
====================================
====================================
维度
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};
// Make an array containing 10 zeros.
var myArray = Array.dim(10, 0);
====================================
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
matrix[2][1]    // 7
====================================
for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}
// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.
====================================
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Make a 4 * 4 matrix filled with zeros.
var myMatrix = Array.matrix(4, 4, 0);
document.writeln(myMatrix[3][3]);    // 0
// Method to make an identity matrix.
Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);
document.writeln(myMatrix[3][3]);    // 1


```

 */

console.log('////////////////////////////////////');
