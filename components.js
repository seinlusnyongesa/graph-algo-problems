const graph = {
  0: [1],
  1: [0, 2],
  2: [1],
  3: [],
};

const components = (graph) => {
  let visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (traverse(graph, node, visited) == true) {
      count += 1;
    }
  }
  console.log(visited);
  return count;
};

const traverse = (graph, src, visited) => {
  if (visited.has(src)) return false;
  visited.add(src);
  for (let current of graph[String(src)]) {
    traverse(graph, String(current), visited);
  }
  return true;
};

console.log(components(graph));
