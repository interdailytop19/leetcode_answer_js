class Edge {
  constructor(startVertex, endVertex, weight=0) {
    this.start = startVertex;
    this.end = endVertex;
    this.weight = weight;
  }

  get startVertex() {
    return this.start;
  }

  get endVertex() {
    return this.end;
  }

  getKey() {
    return `${this.start.getKey()}_${this.end.getKey()}`
  }
}

module.exports = Edge;