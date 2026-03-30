let  a  =[1,2,3,5,7,8,9];

function find (a, b, c){
let l = 0;
let r = a.length - 1;
while(l <= r){
let m = Math.floor((l+r)/2);
let el = a[m];
if(el === c){
 if(b == 0 && a[m - 1] === c ){
   l = 0;
   r = m - 1;
  
 }else if(b == 1 && a[m + 1] === c){
   l = m + 1;
   r = a.length - 1;
 }else{
  return m;

 }


}else if(el > c){
   r = m - 1;
}else{
  l = m + 1;
}

}
return  -1;

}
console.log([find(a, 0, 9), find(a, 1, 9)]);



//  let a  = [5,0,1,2,3,4,9,6,7,8];

// function chunking(){
// let chunk =[];
// let max = 0;
// let r = 0;
// for(let i = 0; i < a.length; i++){
// chunk.push(a[i]);
// max = Math.max(...chunk);
// if(max === i){
//   chunk.sort((a, b) => a - b);
//   a.splice(r, chunk.length, ...chunk);
//     r = i + 1;
//    chunk = [];
// }


// }
// console.log(a);

  
// }
// chunking(a);