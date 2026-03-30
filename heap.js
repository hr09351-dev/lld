class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(num) {
    this.heap.push(num);
    this.bubbleUp();
  }
 dequeue(){
   if(this.heap.length == 0)return null;
     let min = this.heap[0];
   let end = this.heap.pop();
   if(this.heap.length > 0){
    this.heap[0] = end;
    this.sink();

   }
   return min;

 };
 

  bubbleUp() {
    let i = this.heap.length - 1;
      while(i > 0){
        let  p = Math.ceil(i / 2) - 1;

        if(this.heap[p] >= this.heap[i]) break;
           [[this.heap[p]], this.heap[i]] =  [[this.heap[i]], this.heap[p]] ;
            i = p;
        
          
        
      }
  }
  sink(){
let  i = 0;


let n = this.heap.length;
while(true){
  let right = (i * 2) + 1;
let left = (i * 2) + 2;
let small = i;
if(right < n && this.heap[right] > this.heap[small]){
    small = right;
}
if(right < n && this.heap[left] > this.heap[small]){
   small = left;
}
if(i == small) break;
[[this.heap[i]], [this.heap[small]]] = [[this.heap[small]], [this.heap[i]]]
 i = small;
  }
  }

}

let pq = new PriorityQueue();

pq.enqueue(2);
pq.enqueue(8);
pq.enqueue(1);
pq.enqueue(10);
pq.enqueue(3);
 pq.enqueue(9);
 pq.enqueue(4);
console.log(pq.heap);

let i = 0;
while(i < 7){
console.log(pq.dequeue());
 console.log(pq.heap);
  i++;
}