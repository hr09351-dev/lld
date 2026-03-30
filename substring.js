function buildLPS(pattern) {
    let n = pattern.length;
    let lps = new Array(n).fill(0);

    let j = 0; // length of previous longest prefix suffix
    let i = 1; // start from second character

    while (i < n) {
        if (pattern[i] === pattern[j]) {
            j++;
            lps[i] = j;
            i++;
        } else {
            if (j !== 0) {
                j = lps[j - 1]; // fallback using lps
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    console.log(lps);
    return lps;
}

 // return lps;


// Step 2: KMP search algorithm
function kmpSearch(text, pattern) {
  if (pattern.length === 0) return 0; // empty pattern, 
  let  i = 0, j = 0;
  g = null;
  let lps = buildLPS(pattern);
  console.log(lps);
while(i < text.length){

 if(text[i] == pattern[j]){
     g = i;
   i++;
   j++;
 }else{
  if(j > 0){
    j = lps[j - 1];

  }else{
  
   i++;
 }
}
if (j === pattern.length) {
       return i - pattern.length; // match found → return start index
     }



}
return -1;
}

// Example test
let s = "abcdbae";
let sub = "bcdb";
console.log(buildLPS(sub));



