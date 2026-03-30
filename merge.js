
 

 function run(arr){
  if(arr.length <= 1){
    return arr;
  }

  let m = Math.floor(arr.length/2);
   let l =  arr.slice(0, m);
   let r = arr.slice(m);
    return[run(l), run(r)];
  
   
  
 }
 console.log(run([1, 3,6,7, 5, 9]));
 


