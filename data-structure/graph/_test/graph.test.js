const Graph = require('../');
const Vertex = require('../vertex');
const Edge = require('../edge');

describe('Graph', () => {
  it('add vertex correctly', () => {
    const graph = new Graph();
    const newVertex = new Vertex(1);

    graph.addVertex(newVertex);
    expect(graph.allVectices).toMatchObject(['1'])
  });

  it('add edge correctly', () => {
    const graph = new Graph();
    const startVertex = new Vertex(1);
    const endVertex = new Vertex(2);
    const edge = new Edge(startVertex, endVertex);

    graph.addEdge(edge);
    expect(graph.allVectices).toMatchObject(['1','2'])
    expect(graph.allEdges).toMatchObject(['1_2'])
  });

  it('remove vertex correctly', () => {
    const graph = new Graph();
    const startVertex = new Vertex(1);
    const endVertex = new Vertex(2);
    const edge = new Edge(startVertex, endVertex);

    graph.addEdge(edge);
    expect(graph.allVectices).toMatchObject(['1','2'])
    expect(graph.allEdges).toMatchObject(['1_2'])
  });

  it('remove edge correctly', () => {
    const graph = new Graph();
    const startVertex = new Vertex(1);
    const endVertex = new Vertex(2);
    const edge = new Edge(startVertex, endVertex);

    graph.addEdge(edge);
    graph.removeEdge(edge);
    expect(graph.allVectices).toMatchObject(['1','2'])
    expect(graph.allEdges).toMatchObject([])
  });
})