const output = document.getElementById('output')
const sum = document.getElementById('sum')
const binary = document.getElementById('binary')

function error() {
    output.innerHTML = 'Invalid integer input, please reload and try again.';
}

const arr = [];

function array() {
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            arr.push(i)
        }
        output.innerHTML = 'The generated array is ' + arr;
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i)
        }
        output.innerHTML = 'The generated array is ' + arr;
    }
}

function getSum() {
    const add = (a, b) => a + b;
    const getSum = arr.reduce(add);
    sum.innerHTML = 'The sum is ' + getSum;
}

const binNum = [];

function bin() {
    const len = arr.length;
    for (let i = 0; i <= len; i++) {
        if (i in arr) {
            const a = arr[i]
            const b = a.toString(2);
            binNum.push(b)
        }
    }
    binary.innerHTML = 'The binary of absolute element values are: ' + binNum;


}

const startStr = prompt("Enter the start")
const start = parseInt(startStr, 10)
if (isNaN(start)) {
    // display error
    error();
}


const endStr = prompt("Enter the end")
const end = parseInt(endStr, 10)
if (isNaN(end)) {
    // display error
    error();
}


const stepStr = prompt("Enter the step")
const step = parseInt(stepStr, 10)
if (isNaN(step) || step == 0) {
    // display error
    error();
}
else{
    array()
    getSum()
    bin();
}







