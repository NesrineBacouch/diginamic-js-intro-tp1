function Fibonacci(n) {
  var w;
  if(n <= 0) return 0;
  if(n == 1) return 1;
  var u = 0;
  var v = 1;
  for(var i=2; i <= n; i++) {
      w = u+v;
      u = v;
      v = w;
  };
  return v;
}

console.log("Suite de Fibonacci : ");
for(var i=0;i<=20;i++) {
   console.log(Fibonacci(i));
}