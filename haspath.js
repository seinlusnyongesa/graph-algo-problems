const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// function dfsHasPath(graph, src, dst) {
//   if (src == dst) {
//     return true;
//   }

//   for (let neighbour of graph[src]) {
//     if (dfsHasPath(graph, neighbour, dst) == true) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(dfsHasPath(graph, "f", "k"));

function bfsHasPath(graph, src, dst) {
  if (src == dst) {
    return true;
  }
  let queue = [src];
  while (queue.length > 0) {
    let current = queue.shift();
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
      if (neighbour === dst) {
        return true;
      }
    }
  }
  return false;
}

console.log(bfsHasPath(graph, "f", "k"));
