class Vertex {
  constructor(value) {
    this.value = value
    this.neighbourEdge = {}
  }

  getKey() {
    return this.value;
  }

  get allNeighbours() {
    let result = [];

    Object.keys(this.neighbourEdge).forEach((edge_key) => {
      const edge = this.neighbourEdge[edge_key];
      const neighbour = this === edge.startVertex ? edge.endVertex : edge.startVertex;
      result.push(neighbour);
    })

    return result;
  }

  findEdge(vertex) {
    for(let key in this.neighbourEdge) {
      let edge = this.neighbourEdge[key]
      if(edge.startVertex === vertex || edge.endVertex === vertex) {
        return edge;
      }
    }
    return null;
  }

  addNeighbourEdge(edge) {
    const key = `${edge.startVertex.getKey()}_${edge.endVertex.getKey()}`;
    this.neighbourEdge[key] = edge;
  }

  removeNeighbourEdge(edge) {
    if(!this.neighbourEdge[edge.getKey()]) {
      return
    }
    delete this.neighbourEdge[edge.getKey()]
  }
}

module.exports = Vertex;