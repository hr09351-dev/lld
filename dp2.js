let r = [1,4,7,8,11,34, 54,67];

//find peek using binary search;
function fx(r){

while(r.length > 0){
    if(r.length == 1) return r[0];
   
    let m =  r.length % 2 == 0 ? Math.floor(r.length/2) - 1 : Math.floor(r.length/2);
    if(r[m] < r[m + 1]){
       
        r = r.splice(m + 1, r.length - (m));
    }else{
     r= r.splice(0,   m + 1);
    }
   
}
}
console.log(fx(r));


