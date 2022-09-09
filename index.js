let graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// function dfs(graph, start) {
//   const stack = [start];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// }

// dfs(graph, "a");

// function bfs(graph, start) {
//   const queue = [start];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current);
//     for (let neighbour of graph[current]) {
//       queue.push(neighbour);
//     }
//   }
// }

// bfs(graph, "a");

// function dfsRecursive(graph, source) {
//   console.log(source);
//   for (let neighbour of graph[source]) {
//     dfsRecursive(graph, neighbour);
//   }
// }

// dfsRecursive(graph, "a");
