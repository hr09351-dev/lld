
// minimum window subarray
function rt(s, r){
   let c = 0;
   let re = [];
for(let e of s.split('')){
    let i = r.indexOf(e);
    if(i !== -1){
      c = i;
        break;
    }
}
 let f  = c;
 let l = f;
let rd = r;
while(true){
if(l >= s.length){ break;} 
let ch  = s[l];

let access = r.indexOf(ch);
if(access !== -1){
   if(c === f){c = l};
 let rdi = rd.indexOf(ch);
//if(f === 3)console.log(rdi, rd, l);
 if(rdi !== -1)rd = rd.slice(0, rdi) + rd.slice(rdi + 1);
  
if(rd.length == 0){
   re.push(s.slice(f, l + 1));
   f = c;
   rd = r;
   l = f;
   continue;
}
}

l++;
}
console.log(re);

}



rt('ADOBECODEBANC', 'ABC');
rt('ACTREWGHBACD', 'ABC');
