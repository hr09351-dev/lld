let graph = {
'A' : ['B', 'E','C'],
'B' : ['D'],
'C' : [],
'D' : ['C'],
'E' : ['C'],

}
function topologicalSort(g){
let orders = new Map();
let finalOrder = [];
orders.set('A', 0); 
Object.keys(g).forEach(a => {

 for(let n of g[a]){
let r = orders.get(n) ?? 0;
orders.set(n, r + 1);
 

 }
})
console.log(orders);
let n = orders.entries().next();
while(n.value){
let [key , value] = n.value;
finalOrder.push(key);
if(value !== 0) return null;
orders.delete(key);
for(let f of g[key]){
    let no = orders.get(f);
      orders.set(f, (no - 1));
}
orders = new Map(
  [...orders.entries()].sort((a, b) => a[1] - b[1])
);
n = orders.entries().next();
}
return finalOrder;
} 
console.log(topologicalSort(graph));