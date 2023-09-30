
let num = [1,2,10,20,50];

num.forEach(function(cur,ind){
    console.log(cur + 100);
})

let num1 = [10,20,30];
console.log("Second Method is ");
num1.forEach(function(val,ind,arr){
    // thired parameter run whole array for each element 
    console.log(arr[ind] + 100);
})
