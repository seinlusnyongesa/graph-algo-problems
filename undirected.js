const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // return dfsHasPath(graph, nodeA, nodeB, new Set());
  return bfsHasPath(graph, nodeA, nodeB, new Set());
};

// const dfsHasPath = (graph, src, dst, visited) => {
//   if (src === dst) {
//     return true;
//   }
//   if (visited.has(src)) return false;
//   visited.add(src);

//   for (let neighbour of graph[src]) {
//     if (dfsHasPath(graph, neighbour, dst, visited) === true) {
//       return true;
//     }
//   }
//   return false;
// };

const bfsHasPath = (graph, src, dst, visited) => {
  if (src === dst) {
    return true;
  }

  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      for (let neighbour of graph[current]) {
        queue.push(neighbour);
        if (neighbour === dst) {
          return true;
        }
      }
      visited.add(current);
    }
  }
  return false;
};

console.log(undirectedPath(edges, "i", "m"));
