class Stack{
    constructor(a){
      this.i = [{node : a, path : [a]}]
    };
    
    add(a){
        this.i.push(a);
    }
    remove(){ 
        this.i.pop();
    }
    first(){
        return this.i[0];
    }
    end(){
        return this.i[this.i.length - 1];
    }
    length(){
        return this.i.length;
    }
}
class Visited{
    constructor(point){
         this.s = [];
    }
    push(e){
      this.s.push(e);
    }
}

// let n = 40;
let graph = {
    'A': ['B', 'D'],
    'B': ['D', 'C'],
    'C': ['D'],
    'D': [],
    
}
let stack = new Stack('A');
let point = 'D';
let visited = new Visited(point);
while(stack.length() >= 1){
    let {node, path} = stack.end();
       stack.remove();
      if(node == point){
          visited.push(path);
        continue;
     }  
    for(let n of graph[node]){
        stack.add(
            {node : n, path : [...path, n]}
        );
    }
}


console.log(visited);










