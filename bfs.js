class Queue{
    constructor(a){
      this.i = [a]
    };
    addArray(a){
     for(let i = 0; i < a.length; i++){
        this.i.push(a[i]);
     }
    }
    add(a){
        this.i.push(a);
    }
    remove(){
        this.i.shift();
    }
    nextEl(){
        return this.i[0];
    }
    length(){
        return this.i.length;
    }
}



let graph = {
    'A': ['B', 'C', 'J', 'O'],
    'B': ['D', 'E'],
    'C': [],
    'D': ['F', 'G'],
    'E': [],
    'F': ['H', 'I','J'],
    'G': [],
    'H': ['K'],
    'I': ['L'],
    'J': ['M', 'N'],
    'K': [],
    'L': [],
    'M': [],
    'N': ['O'],
    'O': [],
    
}
let queue = new Queue("A");
let point = "O";
let n = [];
let y = [];
while(queue.length() > 0){
    let r = queue.nextEl();
     n.push(r);
    if(r == point){
        break;
    }
     queue.remove();
    
    if(graph[r] !== void 0){
      queue.addArray(graph[r]);
    }
}
console.log(n);
function mr(n , point){
    y.unshift(point);
    for(let i = 0; i < n.length; i++){
        let g = n[i];
        let t = graph[g];
        if(t.length > 0 && t.indexOf(point) !== -1){
            n = n.slice(0, i + 1);
            mr(n, g);
            break;
        }
       
    }

};

mr(n, point);
console.log(y);











//https://www.youtube.com/watch?v=XsEldYXfWso  https://www.youtube.com/watch?v=Qn2gBDamIxE