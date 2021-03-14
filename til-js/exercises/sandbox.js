// var nums;
// var sum = 0;

// for (nums = 0; nums < 20; nums++){
//     if ((nums % 3 == 0) || (nums % 2 == 0)){
//         sum += nums;
//     }
// }
// console.log(sum)



var star;

for (star = 10; star > 0; star--){
        if (star % 2 != 0){
            var space = ((9 - star)/2);
            console.log( (" ".repeat(space)) + ("*".repeat(star)) + (" ".repeat(space))) 
        }
}

