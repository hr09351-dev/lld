// let a  = [5,10,7,67,434,12,5,34,61,78,2,1];

// function selectionSort(a){
 
//     for(let i = 1; i < a.length; i++){
//           let re = false;
//          for(let j = i - 1; j >= 0; j--){
//             if(a[i] < a[0]){
//            let item = a.splice(i, 1)[0];
//            a.splice(0, 0, item);
//            break;
//            }
//        if(a[i] < a[j]) re = true;
//         if((a[i] >= a[j] && re === true) ){
//          let item = a.splice(i, 1)[0];
//            a.splice(j + 1, 0, item);
//            break;
//        }
        

    
                    
//         }
//             }

//    return a;


// }
// console.log(selectionSort(a));





//bubble sort 

class node{
    constructor(value, left, right){
        this.value = value,
        this.left = left,
        this.right = right
    }
}


//kandane algorithm

function kadane(){
let a = [-2,1,-3,4,-1,2,1,-5,4];
let ms = a[0];
let cs = a[0];
let end  = 0;
let start  = 0;

let tempStart = 0; 
let r =[0, 0];
for(let i = 1; i < a.length; i++){
if(cs < a[i]){
    tempStart = i;
    cs = a[i];
}else{
    cs += a[i];
}
if(ms < cs){
    ms = cs;    
    start = tempStart;
    end = i;
}
 
 
}
let sa = a.splice(start, (end - start + 1));
console.log(sa, ms);
}
//kadane();


//two pointer rain water trap;

function tp(arr){
let sum = 0;
let left  = 1;
let right = arr.length - 2;
let leftMax = arr[0];
let rightMax = arr[arr.length - 1];
while(left <= right){
let min = Math.min(leftMax, rightMax);

if(leftMax == min){
//work for left
if(leftMax < arr[left]) {leftMax = arr[left]}else{
 sum = sum + (leftMax - arr[left]); 
}
left++;

}else{
//work for right;
if(rightMax < arr[right]){rightMax = arr[right]}else{
    sum = sum + (rightMax - arr[right]);
}
right--;

}

}
console.log(sum);

}

tp([5,3,8,2,7,3,6]);