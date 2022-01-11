//Functions
//Task 0 (1 method )
function sayHello(name) {
    if (name === 'oleg') {
        return (`Hi  ${name}`);
    } else {
        return (`Hello  ${name}`);
    }
}
console.log(sayHello('oleg'));

//(2 method )
let name = prompt('what is your name?')
if (name === 'oleg') {
    alert(`Hi  ${name}`);
} else {
    alert(`Hello  ${name}`);
}

//Task 1

function min(a, b) {
    if (a > b) {
        return b;
    }
    return a;
}
console.log(min(-1, 37));


//Task 2

function pow(x, n) {
    let result = x ** n;
    return result;
}
console.log(pow(3, 3));


//Task 3

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(19));


//Task 4

function deleteChars(str) {
    return str.substr(1, str.length - 2)
}
console.log(deleteChars('hello'));


//Task 6
function convertType(value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);

    }
}
console.log(convertType('my string', 'boolean'));*/

let convertType = (value, toType) => {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);

    }
}
console.log(convertType('my string', 'boolean'));

//function Expression

let convertType = function (value, toType) {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);
    }
}
console.log(convertType('my string', 'boolean'));



let convertType = (value, toType) => {
    if (toType === 'boolean') {
        return Boolean(value);
    } else if (toType === 'string') {
        return String(value);
    } else if (toType === 'number') {
        return Number(value);

    }
}
console.log(convertType('my string', 'boolean'));


