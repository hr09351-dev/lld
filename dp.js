class ListNode{
constructor(value, next, previous){
    this.value = value;
    this.next = next;
    this.previous = previous;
}
}


class List{
    constructor(){
        this.node = null;
        this.height = 0;
    }
set(a){
let r = this.node;
while(r){
    if(r && r.next == null){
        r.next = new ListNode(a, null, r);
        break;
    }
    r = r.next;
}
if(!r) this.node = new ListNode(a, null, null);
this.height++;
}
print(){
    let w =this.node;
    while(w){
       console.log({previous : w?.previous?.value ?? null, value : w.value, next : w?.next?.value ?? null})
        w = w.next;
    }
}
reverse(){
    let c = this.node;
    let r = null;
    while(c){
      const d = c;
      c = c.next;
      d.next = r;
      if(r)r.previous = d;
      r = d;
    }
    r.previous = null;
    this.node = r;
}


delete(n){
     if(this.node.value == n){
        
        this.node = this.node.next;
        this.node.previous = null;
        return this.node;
    }
    let c = this.node;
    while(c){
       if(c?.next?.value == n){
        if(c?.next?.next?.previous) c.next.next.previous = c;
         c.next  = c?.next?.next;
         
          return this.node;
       }

        c = c.next;
    }
    return this.node;
}

}

let list  = new List();

[1,2,3,4,5,6,7,8,9,10].forEach(a => list.set(a));

console.log(list);

list.reverse();
list.print();