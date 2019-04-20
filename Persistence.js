/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
 */

function persistence(num) {
    //set multiplyCount equal 0
    //turn the number into an array of nums
    //while the length of the array is more than 1
    //multiply each digit together
    //the product becomes the new arr
    //return multiplyCount

    var arr = num.toString().split('');
    //var multiplyCount = 0;
    var arr2;
    for (var i = 0; arr.length > 1; i++) {

        arr2 = arr.reduce(function(a, b) {
            //if(b !== 0 || a !== 0)
            return a * b;

        });

        //multiplyCount++;
        arr = arr2.toString().split('');
    }
    return i;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(49)); // 3
console.log(persistence(10)); // 1

//another solution
function persistence1(num1) {
    for (var i = 0; num1 > 9; i++) {
        num1 = num1.toString().split('').reduce((t, c) => t * c);
    }
    return i;
}

console.log(persistence1(54)); // 2



//another solution
function persistence2(num3, cnt=0) {
    let arrayNum = num3.toString().split('');
    return arrayNum.length === 1 ?
        cnt :
        persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
}
console.log(persistence1(54));