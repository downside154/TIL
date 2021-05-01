const obj1 = {x: 1, y: 2};
const obj2 = {y: 20, z: 3}


const mobj ={...obj1, ...obj2}
const kobj = {...obj2, ...obj1}
console.log(mobj)
console.log(kobj)