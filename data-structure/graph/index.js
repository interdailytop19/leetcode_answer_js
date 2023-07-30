class Graph {
  constructor(isdirected=false) {
    this.isdirected = isdirected;
    this.vertices = {};
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices[vertex.getKey()] = vertex;
  }

  addEdge(edge) {
    if(!this.vertices[edge.startVertex.getKey()]) {
      this.vertices[edge.startVertex.getKey()] = edge.startVertex;
    }

    if(!this.vertices[edge.endVertex.getKey()]) {
      this.vertices[edge.endVertex.getKey()] = edge.endVertex;
    }

    const edge_key = `${edge.startVertex.getKey()}_${edge.endVertex.getKey()}`;
    if(this.edges[edge_key]) {
      throw new Error('edge or existed')
    } else {
      this.edges[edge_key] = edge;
    }

    if(this.isdirected) {
      this.vertices[edge.startVertex.getKey()].addNeighbourEdge(edge);
    } else {
      this.vertices[edge.endVertex.getKey()].addNeighbourEdge(edge);
      this.vertices[edge.startVertex.getKey()].addNeighbourEdge(edge);
    }
  }

  get allVectices() {
    return Object.keys(this.vertices).map((key) => this.vertices[key]);
  }

  get allEdges() {
    return Object.keys(this.edges).map((key) => this.edges[key]);
  }

  findEdge(startVertex, endVertex) {
    let start_key = startVertex.getKey();

    if(!this.vertices[start_key]) {
      return null;
    }

    return startVertex.findEdge(endVertex);
  }

  removeEdge(edge) {
    if(!this.edges[edge.getKey()]) {
      return;
    }

    delete this.edges[edge.getKey()];

    edge.startVertex.removeNeighbourEdge(edge);
    edge.endVertex.removeNeighbourEdge(edge);
  }

  getNeighbours(vertex) {
    if(!this.vertices[vertex.getKey()]) {
      throw new Error('vertex not existed in this graph');
    }

    return vertex.allNeighbours();
  }
}

module.exports = Graph;