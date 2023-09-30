// var allowed hoisting but let and const not allowed 
a = 5;
console.log(a);
var a;
// without initialized you can not use value or print value 
Console.log("I am a " + job);
var job = "web developer";// move top
Console.log("I am a " + job);
function whoAmI(){
	Console.log("I am a " + job);
	var job = "web developer";
	Console.log("I am a " + job);
}
whoAmI();

/*
above function ececute like this 
var job = undefined;
console.log("I am a " + job);
var job = "web developer";
console.log("I am a " + job);
function whoAmI(){
	var job = undefined;
	console.log("I am a " + job);
	var job = "web developer";
	console.log("I am a " + job);
}
whoAmI();
*/