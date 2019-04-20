// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//6 kyu

function expandedForm(num) {
    let splits = num.toString().split('').reverse();
    let result = [];

    for(let i = 0; i < splits.length; i++){
        splits[i] === '0' ? result.push() : result.push(splits[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm(123)); // Should return '100 + 20 + 3'
console.log(expandedForm(102)); // Should return '100 + 2'


const expandedForm2 = n2 => n2.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

console.log(expandedForm2(12)); // Should return '10 + 2'
console.log(expandedForm2(42)); // Should return '40 + 2'
console.log(expandedForm2(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm2(123)); // Should return '100 + 20 + 3'
console.log(expandedForm2(102)); // Should return '100 + 2'