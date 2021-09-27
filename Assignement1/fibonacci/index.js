module.exports.fibonacci = function (n) {
  if (n < 0) n = n * -1;
  if (n <= 2) return 1;
  else return this.fibonacci(n - 2) + this.fibonacci(n - 1);
};
