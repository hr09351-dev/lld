// var twoSum = function(nums, target) {
    
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++){
//         let currentElement = nums[i];
//         let remainingElement = target - currentElement;
//         let pairIndex = map.get(remainingElement);
//          if(pairIndex !== void 0)return[i, pairIndex];
//          map.set(currentElement, i);     

//     }
// }
// console.log(twoSum([1,2,9,8], 9));



//best time to buy and sell stock




//    function buyAndSell(prices){
//       let buy = Infinity;
//       let profit = 0;
//     for(let i = 0; i < prices.length; i++){
//        let sell = prices[i];
//        if(sell < buy)buy = sell;
//        if(profit < (sell - buy)){
//           profit = sell - buy;
//        }
//     }
//     return profit;

//    }
//  console.log(buyAndSell([1,7,6,3,2,1,2]));

//contain duplicate

// function containDuplicate(arr){
//      let set = new Set();
//     for(let i = 0; i < arr.length; i++){
//       let ele = arr[i];
//       if(set.has(ele)){
//        return true;
//       }else{
//         set.add(ele);
//       }
//   }
//   return false;
// }

// console.log(containDuplicate([1,2,3,4,5,6,7,20]));


// product of except self


function product(arr){
   let r = [];
    for(let i = 0 ; i < arr.length; i++){
     if(i == 0){
        let p = 1;
     for(let j = i; j < arr.length; j++){
         p = p * arr[j];  
      }
      r.push(p);
      continue;
     }
     let g = arr[i] == 0 ? (r[i - 1] * arr[i - 1]) : (r[i - 1] * arr[i - 1]) / arr[i];
     r.push(g);


   }
   return r;
}

console.log(product([1,2,3,4,0]));


