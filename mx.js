class Node{
    constructor(left, right, value){
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class ListNode{


    constructor(){
        this.head =null;
        this.value = 6;
    }
    set(a,b){      
      let r = this.head;
      while(r){
        if(r.right == null){
            r.right = new Node(b, null, a); 
            break;      
        }   
       r = r.right;
      }
      if(!this.head) this.head = new Node(b, null, a);
  }

  reset(node){
     let value = node.value;
       if(node.right && !node.right.right && node.right.left){
         [[node.right.left], [node.right.value] ] = [[node.right.value], [node.right.left] ];
      }
    if(node.right) {        
        let r  = this.reset(node.right);
        node.right = r.node;
        node.value  = r.value;
    
    };
   




    return {value : value, node : node};
  }




}


let list  = new ListNode();
let r = [
    {'value' : 2, 'left' : 4},
    {'value' : 3, 'left' : 6},
    {'value' : 4, 'left' : 8},
    {'value' : 5, 'left' : 10},
    {'value' : 6, 'left' : 12}
];


r.forEach(a => {
list.set(a.value, a.left);
});
console.log(list.reset(list.head));
