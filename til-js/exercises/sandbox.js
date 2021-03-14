// function numSum(n){
//     var sum = 0;
//       for(i = 0; i <= n; i++){
//         sum += i; 
//          }
//     console.log(sum)
//          }
// numSum(15);


var nums;
var sum = 0;

for (nums = 0; nums < 20; nums++){
    if ((nums % 3 !== 0) && (nums % 2 !== 0)){
        sum += nums;
    }
}
console.log(sum)
