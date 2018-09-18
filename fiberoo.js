
function fib(limit) {
  let fib1 = 0;
  let fib2 = 1;
  const result = [];
  result.push(fib1);
  result.push(fib2);
  for (let i = 0; i < limit - 2; i++) {
    const next = fib1 + fib2;
    result.push(next);
    fib1 = fib2;
    fib2 = next;
  }
  return result;
}

console.log(fib(100));

function numsToStrings(data) {
  return _.map(data, n => `${n}`);
}

console.log(numsToStrings(fib(100)));

function numEvenNums(data) {
  return _.filter(data, n => (n % 2) === 0).length;
}

console.log(numEvenNums(fib(100)));
