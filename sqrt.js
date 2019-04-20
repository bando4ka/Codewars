// Return the next square if sq if a perfect square, -1 otherwise

function findNextSquare(sq) {

//   var perfectNumber = 0;
//   for (let i =  1; i<=Math.sqrt(sq)/2; i++){
  if (parseInt(Math.sqrt(sq)) == Math.sqrt(sq)) {
 return Math.pow(Math.sqrt(sq)+1, 2);
 } else {
  return -1;
  }
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));