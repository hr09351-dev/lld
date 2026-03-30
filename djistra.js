let graph = {
    'A' : [['B', 4], ['C', 1]],
    'B' : [['D', 1]],
    'C' : [['B', 2], ['D', 5]],
    'D' : []
}

// const graph = {
//   A: { B: 4, C: 1 },
//   B: { D: 1 },
//   C: { B: 2, D: 5 },
//   D: {}
// };





































function dijkstra(t, s){
    let point = new Map();
    let visited = new Set();
    Object.keys(t).forEach(a => point.set(a, (a == s ? 0 : Infinity)));
    function setIntoMap(n, s){
      let k = n[0];
      let v = n[1];
      let kv = point.get(k);
      let sv = point.get(s);
      point.set(k, kv > (v + sv) ? (v + sv) : kv);
    } 
    function find(){
        let r = null;
        point.forEach((v, k) => {
        if(!visited.has(k)){
         if(!r){
            r ={};
           r.k = k; r.v = v;
         }else{
           if(r.v > v){r.k = k; r.v = v};
         }
        }
         }
        );
        return r?.k ?? null;
    }
   
    function line(s){
   for(let g of t[s]){
      setIntoMap(g, s);
   }
    visited.add(s);
     let k = find();
     if(k)line(k);
    }
    line('A');
  return point;
}

 console.log(dijkstra(graph, 'A'));