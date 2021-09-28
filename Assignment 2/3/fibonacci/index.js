fibonacci = function (n) {
  if (n < 0) n = n * -1;
  if (n <= 2) return 1;
  else return this.fibonacci(n - 2) + this.fibonacci(n - 1);
};
const n1 = 30;
console.log("The fibonacci of " + n1 + " is " + fibonacci(n1));

const n2 = -15;
console.log("The fibonacci of " + n2 + " is " + fibonacci(n2));


