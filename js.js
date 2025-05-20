// 1.Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const arra = [1, 2, 3]

const processArray = (array, callback) => {
   return callback(array)
};


const getSum = (arr) => {
     let res = 0;
     for (const element of arr) {
         res += element;
     }
     return res;
}

const getMax = arr => {
    let max = arr[0];
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const getMin = arr => {
    let min = arr[0];
    for (const element of arr) {
        if (element < min) {
            min = element
        }
    }
    return min;
}
console.log(processArray(arra, getSum));
console.log(processArray(arra, getMax));
console.log(processArray(arra, getMin));


// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.

const operate = (a, b, callback) => {
    return callback(a, b);
};

const sum = (c, d) => {
    return `sum of numbers ${c} + ${d} = ${c + d}`;
}
const sub = (c, d) => {
    return `difference of numbers ${c} - ${d} = ${c - d}`;
}
const multiply = (c, d) => {
    return `product of numbers ${c} * ${d} = ${c * d}`;
}
const divide = (c, d) => {
    return `quotient of numbers ${c} / ${d} = ${c / d}`;
}

console.log(operate(10, 5, sum));
console.log(operate(10, 5, sub));
console.log(operate(10, 5, multiply));
console.log(operate(10, 5, divide));
