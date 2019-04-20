/*Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers */

function iqTest(numbers) {

    let splits = numbers.split(' ').map(Number);

    let someCheck = function(num) {
        return (num % 2)
            ? 'odd'
            : 'even';
    };

    let findOddEven = function (array) {
        let numEvens = 0;
        //for (let i = 0; i < splits.length; i++) {
        array.forEach(function(value){
            if (someCheck(value) === 'even') { numEvens++; }
        });
        return (numEvens === 1) ? 'even' : 'odd'
    };
    let num = splits.map(someCheck),
        newStatus = findOddEven(splits);

    return num.indexOf(newStatus) + 1;
}


console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));

//another solution
function iqTest2(numbers2){
    var splits = numbers2.split(" ");
    var isMajorEven = (splits[0]%2 + splits[1]%2 + splits[2]%2) < 2;

    for(let i=0; i<splits.length; i++)
        if((isMajorEven && splits[i]%2===1) || (!isMajorEven && splits[i]%2===0))
            return i+1;
}

console.log(iqTest2("2 4 7 8 10"));//orig
console.log(iqTest2("1 2 1 1"));//orig

//one more another solution
function iqTest3(numbers3){
    let odd = [];
    let even = [];

    let magicPos = 0; // position of the unique integer

    numbers3 = numbers3.split(' ');
    for (let i = 0; i < numbers3.length; i++){

        if ((numbers3[i] % 2) === 0){
            even.push(numbers3.indexOf(numbers3[i])+1);
        } else {
            odd.push(numbers3.indexOf(numbers3[i])+1);
        }
    }
    odd.length === 1 ? magicPos = odd[0] : magicPos = even[0];

    return magicPos;
}

console.log(iqTest3("2 4 7 8 10"));
console.log(iqTest3("1 2 1 1"));