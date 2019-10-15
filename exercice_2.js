
var tab=new Array(0,1);

function fib()

{

var Nieme= window.prompt("entrez le N ième rang de\nla suite de Fibonacci", "50");

for (var i=2; i<=Nieme; i++)

{

tab[i]=tab[i-1]+tab[i-2];

}

for (var n=0; n<=Nieme; n++)

{

document.fibonacci.resultats.value+=tab[n]+", ";

}
}