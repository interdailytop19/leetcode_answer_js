function depthFirstSearchRecursive(graph, currentVertex, visited) {
  visited[currentVertex.getKey()] = true;
  graph.getNeighbours(currentVertex).forEach(neighbourVertex => {
    if(!visited[neighbourVertex.getKey()])
      depthFirstSearchRecursive(graph, neighbourVertex, currentVertex);
  });
}

module.exports = function depthFirstSearch(graph, startVertex) {
  const visited = {};
  depthFirstSearchRecursive(graph, startVertex, visited);
}