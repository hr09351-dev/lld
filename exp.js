

//const e = require("cors");
// function b(a, p = 2){
//   console.log(a);
// let length = a.length;
// a = a.concat(a);
// let l = length - 2;
// let r = l + length - 1;

// while(l <= r){
//     let m = Math.floor((l+r)/2);
//     if(a[m] === p){
//        let x = m - length;
//       return x <= -1 ? x + length : x;
//     }else if(a[m] < p){
//      l = m + 1;
//     }else{
//      r = m;
//     }
// }
// return -1;
// }

// for(let i = 1; i <= 7; i++){
//   let a = [3,4,5,6,7,1,2];
//   console.log(i, b(a, i));
// }

// let a = [17,18,19,20],
//     b = [1,2,3,4,5,6];

//  function median(a, b){
//    if(b.length < a.length) [a, b] = [b, a];
//    console.log(a, b);
 
//  let al =a.length,
//  bl = b.length,
//  low = 0,
//  high = al,
//  leftLength = Math.floor((al + bl)/2) + 1;
 
 

//  while(low <= high){
//  let ma = Math.floor((low + high)/2);
//  let mb = leftLength - ma,
//   leftA = (ma - 1) < 0 ? -Infinity : a[ma - 1],
//  rightA = ma >= al ? Infinity :  a[ma],
//  leftB =  (mb - 1) < 0 ? -Infinity : b[mb - 1],
//  rightB =  mb >= bl ? Infinity : b[mb];
//  console.log(leftA, leftB, rightA, rightB);
// if(leftA <= rightB && leftB <= rightA){
//    if((al + bl) % 2 === 0){
//     return (Math.max(leftA , leftB) + Math.min(rightA, rightB))/2; 
//    }else{
//      return Math.max(leftA, leftB)
//    }
// }else{
//  if (leftB > rightA) {
//     low = ma + 1 
// }else{
//     high = ma - 1
// };
// } 
//  }
 
// }
 

//  console.log(median(a, b));



// n = 8;
// let l = 0; n = 8;

function sqrt(s){
  let l = 0,
      h = s,
      ans = -1;
      while(l <= h){
        let m = Math.floor((l+h)/2);
        if(m*m === s){
           return m;
        }else if(m*m < s){
          ans = m;
          l = m + 1;
        }else{
          h = m - 1;
        }
      }
      return ans;
}

for(let i = 1; i <= 25; i++){
   console.log(i, sqrt(i));
}