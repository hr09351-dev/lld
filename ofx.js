//find  neighbour peeks 

let  i = [1,2,3,4,5,6,7];

console.log(i);

   let l = 0,
   b = null,
   h = i.length -  1;

   while(l < h){
    let  m = Math.floor((l + h)/2); 
    if(i[m] <= i[m + 1]){
          l = m + 1; 
    }else{
        h = m;
    }
    console.log(l, h);
   }
   


//fast and slow pointer


// let  i = 0;
// let a = [2,2,3,4];
// let r = false;
// outer : while(i < a.length){
// let s = i;
//  let f = i;
//     for(j in a){
//        let ps = s + 1;
//        let pf = f + 2;
//         s = (ps >= a.length)? ps  - a.length : ps;
//         f = (pf >= a.length)? pf - a.length : pf;
//        if(s !== f && a[s]  == a[f]){
//         r =true;
//         console.log(a[s], a[f]); 
//         break outer;
//        };


//     }


//     i++;
// }
// console.log(r);