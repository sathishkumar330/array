

console.log("--------reverse the number-----")

var a=6;


for (i=a;i>=0;i--)
{
	console.log(i);
}


console.log("--------sum of the number-----")

var a=6;
sum=0;

for (i=0;i<=a;i++)
{
	sum+=i;
}
console.log(sum);

//-------------------------------index value-------------------------//

var x = ["sathish","karthick","king","queen","abi"];

var f = prompt("Enter the index");

for(i=0;i<x.length;i++){
	if(x[i]==x[f]){
	document.write(x[i]);
	}
}



var a=prompt("Enter the number");

if(a%2==0)
{
	console.log(a,"THIS number is even")
	
}
else{
	console.log(a,"THIS number is odd")
	
}