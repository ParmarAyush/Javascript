/*
in pass by value both variable are independent after copied value.
if perform increment operation on b its not affect to a 
*/
let a = 10;
let b = a; // pass by value

console.log("\nValue Of A : " + a + "\t\tValue Of B : "+ b);
a++
console.log("Value Of A after increment : " + a + "\tValue Of B after increment : "+ b);

/*
in pass by reference both object are dependent after copied value.
if perform increment operation on b its affect to "b" as well as "a" 
*/

const obj1 = {
    userName : "Aayush",
    password : "Aayush@123",
}

const obj2 = obj1;
obj2.password = "Change@123";

console.log(obj1);
console.log(obj2);