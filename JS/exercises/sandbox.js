
// Array.prototype.myforEach = function(fn){
//   if (typeof fn != 'function'){
//     throw new TypeError(`${fn} is not a function`);
//   };
//   for(i = 0 ; i > this.length, i++) {
//     fn(this[i], i , this);}};

// [1, 2, 3].myforEach(()=>{})


// const numbers = [1, 2, 3];
// console.log(numbers.map(v => v ** 2))
// console.log(numbers.filter(v => v > 2))

// Array.prototype.myMap = function(callback) {
//   if (typeof callback !== 'function'){
//     throw new TypeError (`${callback} is not a function`);
//   }
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(callback(this[i], i, this));
//   }
//   return res;
// };

// console.log(numbers); 
// console.log(numbers.myMap(v => v ** 2)); // [1, 4, 9]




// Array.prototype.myFilter = function(callback) {
//   if (typeof callback != 'function'){
//     throw new TypeError (`${callback} is not a function`);
//   }
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) res.push(this[i]);
//   };
//   return res;
// }

// console.log(numbers.myFilter(v => v > 2))

console.log( [1,2,[3],[4]].flat(1))
