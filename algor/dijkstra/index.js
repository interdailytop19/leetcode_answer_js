const PriorityQueue = require('../../data-structure/priority-queue');

function dijkstra(graph, startVertex) {
    const visited = {};
    const distance = {};
    const previousParent = {};
    const queue = new PriorityQueue()

    graph.allVectices.forEach(vertex => {
      visited[vertex.getKey()] = false;
      distance[vertex.getKey()] = Infinity;
    })

    distance[startVertex.getKey()] = 0;
    queue.add(startVertex, 0);

    while(!queue.isEmpty()) {
      const currentVertex = queue.poll();
      if(!visited[currentVertex.getKey()]) {
        // not visited before
        visited[currentVertex.getKey()] = true
  
        currentVertex.allNeighbours.forEach(neighbour => {
          const edge = graph.findEdge(currentVertex, neighbour);
          const currentDistance = distance[neighbour.getKey()];
          const distanceFromCurrentToNeighbour = distance[currentVertex.getKey()] +
            edge.weight;
  
          if(distanceFromCurrentToNeighbour < currentDistance) {
            // update new shortest path 
            distance[neighbour.getKey()] = distanceFromCurrentToNeighbour;
            previousParent[neighbour.getKey()] = currentVertex.getKey();
          }

          // add neighbour to queue
          queue.add(neighbour, distance[neighbour.getKey()]);
        })
      }
    }

    return {
      distance,
      previousParent
    }
}

module.exports = dijkstra;