function start(g, start, end){
 let result = [];
 function beStart(node, path){
     path.push(node);
    if(node === end){     
        result.push([...path]);
    }
    for(let ne of g[node]){        
        beStart(ne, path);
    }
    path.pop();
 }
 beStart(start, []);
 return result;
}
let graph = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': ['D', 'E'],
    'D': [],
    'E' : ['D']
    
}

console.log(start(graph, 'A', 'D'));