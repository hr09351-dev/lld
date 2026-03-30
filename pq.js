
function heapify(arr, n, i) {
 // console.log(arr, n, i);
  while (true) {
     
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // check left child
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // check right child
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // if no swap needed, stop
    if (largest === i) {
      break;
    }

    // swap
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // move down and continue heapify
    i = largest;
  }
}

function buildMaxHeap(arr) {


  for(let  i = 0; i <= arr.length; i++){
     const n = arr.length - i;
      if(i > 0){
       [[arr[0]],[arr[arr.length - i]]]  = [[arr[arr.length - i]],[arr[0]]];     
      }
      if(i == arr.length) break;
    for (let j = Math.floor(n / 2) - 1; j >= 0; j--) {
    heapify(arr, n, j);
  }
  }


  // start from last non-leaf node
  

  return arr;
}
const arr = [12, 11, 13, 5, 6, 7, 14];
console.log(buildMaxHeap(arr));