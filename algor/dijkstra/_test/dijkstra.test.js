const dijkstra = require('../');
const Graph = require('../../../data-structure/graph');
const Vertex = require('../../../data-structure/graph/vertex');
const Edge = require('../../../data-structure/graph/edge');

describe('dijkstra', () => {
  it('undirected graph traverse correctly', () => {
    const graph = new Graph();
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    const edge1 = new Edge(vertex1, vertex2)

    graph.addEdge(edge1);

    expect(dijkstra(graph, vertex1)).toMatchObject({
      distance: {"1": 0, "2": 0},
      previousParent: {"2": 1}
    });

    const vertex3 = new Vertex(3);
    const vertex4 = new Vertex(4);
    const edge2 = new Edge(vertex1, vertex3);
    graph.addEdge(edge2);

    expect(dijkstra(graph, vertex1)).toMatchObject({
      distance: {"1": 0, "2": 0, '3': 0},
      previousParent: {"2": 1, '3': 1}
    });
  })

  it('directed graph traverse correctly', () => {
    const graph = new Graph(true);
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);
    const edge1 = new Edge(vertex1, vertex2, 1)

    graph.addEdge(edge1);

    expect(dijkstra(graph, vertex1)).toMatchObject({
      distance: {"1": 0, "2": 1},
      previousParent: {"2": 1}
    });

    const vertex3 = new Vertex(3);
    const vertex4 = new Vertex(4);
    const edge2 = new Edge(vertex1, vertex3, 2);
    graph.addEdge(edge2);

    expect(dijkstra(graph, vertex1)).toMatchObject({
      distance: {"1": 0, "2": 1, '3': 2},
      previousParent: {"2": 1, '3': 1}
    });
  })
})