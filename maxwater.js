let a = [1,2,1,2,3,1,3,2, 4];
//find longest adjecent subarray;

// function check(a){
//   let tw = 0;
//   let f = 0;
//   let l  = a.length - 1;
//   let fh = 0;
//   while(f < l){
//      let fe = a[f];
//      let le = a[l];
//      if(le > fh && fe > fh) fh = Math.min(le, fe);
//      if(fe < le){      
//       tw = tw + (fh - fe);
//       f++;
//      }else{
//      tw = tw + (fh - le);
//       l--;
//      }
//   }                                                                                                                                                                                                             
//   console.log(tw);
// }       



// function check(a){
//   let f = 0;
//   let l = a.length - 1;
//   let fh = 0;
//   let max = 0;
//   let v = 0;
//   while(f <= l){
//      let fe = a[f];
//      let le = a[l];
//      if(le > fh && fe > fh) {
      
//       fh = Math.min(le, fe)
//        max = Math.max(max, v);
//        v = 0;
//      }
//     if(fe < le){
//        v = v + (fh - fe);  
//       f++;
//     }else{
//       v = v + (fh - le);
//       l--;
//     }



//   }
//   max = Math.max(max, v);
//   console.log(max);
// }

function check(a){
   a = a.sort((b, c) => b - c);
   let r = [];
  let max = 3;
  let f = 0;
  let l = a.length - 1;
  while(f <= l){
    let fe = a[f];
    let le = a[l];
    if(le === max || fe == le){
      r.push([le]);
      l--
      continue;
    }
   if(fe + le <= max){
    r.push([fe, le]);
    f++;
    l--;
   }else{
    l--;
   }

  }
console.log(r, r.length);



  }

check(a);
