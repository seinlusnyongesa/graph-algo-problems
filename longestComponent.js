const graph = {
  0: [1],
  1: [0, 2],
  2: [1],
  3: [],
};

const longestComponent = (graph) => {
  let longest = 0;
  let visited = new Set();
  for (let node in graph) {
    let size = traverse(graph, node, visited);
    if (longest < size) {
      longest = size;
    }
  }
  return longest;
};

const traverse = (graph, src, visited) => {
  if (visited.has(src)) return 0;

  visited.add(src);

  let count = 1;
  for (let current of graph[String(src)]) {
    count += traverse(graph, String(current), visited);
  }
  return count;
};
// console.log(traverse(graph, "1", new Set()));

console.log(longestComponent(graph));
