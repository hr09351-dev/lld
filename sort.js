



//selection sort


function selection(){
let a = [2, 3, 1, 4, 8, 6, 2, 9,  2, 6, 7, 8, 3, 3, 2, 2,2 ,7];
let m = [];
while(a.length > 0){
    let min = a[0];
    let h = null;
    for(let j = 1; j < a.length; j++){
     min =  Math.max(min, a[j]);
    }
    h = a.indexOf(min);
    a.splice(h, 1);
   m.unshift(min);
}
console.log(m);
}



//insertation sort

function insertation(){
    let a  = [5, 7, 4, 8, 1, 4, 4],
    length = a.length,
    b = [];
   
    console.log(a);
   for(let  i = 1; i < length; i++){
      let  v = false;
       let e = a[i];
       let j = i - 1;
       while(j >= 0){
        let n = a[j];
        if(e < n){
            [a[j], a[i]] = [a[i], a[j]]
            i--;
            v =true;
        }
       j--;
       }
     
   }
   console.log(a);

}



//quick sort


function quick(a){
if(a.length  <= 1) return a;
let right = [];
let pivot  = a[a.length - 1];
let left = [];

for(let i = 0; i < a.length - 1; i++){
 let e = a[i];
 if(pivot >= e){
    left.push(e);
 }else{
    right.push(e);
 }
}
return [...quick(left) , pivot , ...quick(right)];

}

//merge

function quick(a){
if(a.length  <= 1) return a;
let right = [];
let pivot  = a[a.length - 1];
let left = [];

for(let i = 0; i < a.length - 1; i++){
 let e = a[i];
 if(pivot >= e){
    left.push(e);
 }else{
    right.push(e);
 }
}
return [...quick(left) , pivot , ...quick(right)];

}

function merge(a){
if(a.length <= 2){
    if(a.length == 2){
      if(a[0] > a[1]){
        [a[0], a[1]] = [a[1], a[0]];
      }
    }
     return [a];
    
} 
let m = Math.floor(a.length/2);
console.log(m);
let p1 = a.slice(0, m);
let p2 = a.slice(m, a.length);
return [...merge(p1), ...merge(p2)];

}



let bm = [1, 2, 4, 8, 16, 32];

function heap(x){
    let a = [],
     i = 1;
    while(i <= x){
      a.push(2**(i - 1));
      i++;
    }
console.log(a);
}

function check(x){
   let r = [3, 7, 56, 34, 21, -1, 2, 6, 10, 3, 89, 4, 2, 6, 1, 4,5, 8,5,9,0,2,4,65,43,42,98,22,43,56,76];
   let f = Math.ceil(Math.log(r.length + 1) /  Math.log(2));
   for(let i =0; i < f - 1; i++){
   let c = r.length - 1;
   while(c > 0){
   let p = (Math.floor((c + 1) / 2) - 1);
   if(r[p] > r[c]){
      [r[p], r[c]] = [r[c], r[p]];
   }else if(r[p] == r[c]){
      let e = r[c];
       r.splice(c, 1);
     r.splice(p + 1, 0, e);
   }
   c--;

   }
}
   console.log(r);

}



function bubble(a){
     function rebubble(from, to){
      let swap = false;
      for(let j = from ; j < (to - 1); j++){
       if(a[j] > a[j + 1]){
         swap = true;
         [a[j], a[j + 1]] = [a[j + 1], a[j]];
       }       
      }
    console.log(a);
     if(to >= 2 && swap == true)rebubble(0, (to - 1));
   }
   rebubble(0,  a.length);   
}


((arr) => {
 let xor = 0;
    for (let num of arr) {
        xor ^= num; // XOR all numbers
    }

    // xor now = a ^ b (two unique numbers)

    // Find a set bit (rightmost bit = 1)

    let setBit = xor & -xor;
  console.log(setBit, xor, -xor);
   //  let num1 = 0;
   //  let num2 = 0;

   //  for (let num of arr) {
   //      if (num & setBit) {
   //          num1 ^= num; 
   //      } else {
   //          num2 ^= num; 
   //      }
   //  }

    //console.log([num1, num2]);
})([1,1,2,2,3,4]);



//bubble([0, 2,67, -1, -8, 0, 1, 4, 56,0, 2, 3, 0, 2.54, 2.55 ]);

