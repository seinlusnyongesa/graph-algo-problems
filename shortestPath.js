const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const buildGraph = (edges) => {
  const graph = {};
  for (let [a, b] of edges) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const shortestPath = (edges, src, dst) => {
  let visited = new Set();
  const graph = buildGraph(edges);
  let shortestPath = traverse(graph, src, dst, visited);
  console.log(visited);
  return shortestPath;
};

const traverse = (graph, src, dst, visited) => {
  let queue = [[src, 0]];
  visited.add(src);
  while (queue.length > 0) {
    let [node, count] = queue.shift();
    if (node === dst) return count;
    for (let current of graph[node]) {
      if (!visited.has(current)) {
        queue.push([current, count + 1]);
        visited.add(current);
      }
    }
  }
  return -1;
};

console.log(shortestPath(edges, "w", "z"));
