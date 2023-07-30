class minHeap2 {
  constructor() {
    this.container = [];
  }

  add(item) {
    this.container.push(item);
    this.heapifyUp();
  }

  poll() {
    const item = this.container[0] ? this.container[0] : null

    if(this.container.length === 1) {
      return this.container.pop();
    }

    this.container[0] = this.container.pop();
    this.heapifyDown();

    return item;
  }

  peek() {
    return this.container[0] ? this.container[0] : null
  }

  remove(item) {
    const index = this.find(item);

    if(index === null) {
      return null;
    }

    if(index === this.container.length - 1) {
      // remove last element
      return this.container.pop();
    } else {
      const return_item = this.container[index];
      this.container[index] = this.container.pop();
      const parent = this.getParent(index);
  
      if(parent && parent > this.container[index]) {
        this.heapifyUp(index);
      } else {
        this.heapifyDown(index);
      }
      return return_item;
    }
  }

  find(item) {
    for(let i = 0; i < this.container.length; i++) {
      if(this.container[i] === item) {
        return i;
      }
    }
    return null;
  }

  toString() {
    return this.container.toString();
  }

  heapifyUp(custom_index) {
    let current_index = custom_index || this.container.length - 1;

    while(this.hasParent(current_index)) {
      const parent_index = this.getParentIndex(current_index);
      if(this.container[parent_index] < this.container[current_index]) {
        break;
      }
      this.swap(current_index, parent_index);
      current_index = parent_index;
    }
  }

  heapifyDown(custom_index) {
    let current_index = custom_index || 0;

    while(this.hasLeftChild(current_index)) {
      let next_index;

      let left_child = this.getLeftChild(current_index);
      let right_child = this.getRightChild(current_index);

      if(right_child && right_child < left_child) {
        next_index = this.getRightChildIndex(current_index)
      } else {
        next_index = this.getLeftChildIndex(current_index)
      }

      if(this.container[current_index] < this.container[next_index]) {
        break;
      }

      this.swap(current_index, next_index);
      current_index = next_index;
    }
  }

  getParentIndex(child_index) {
    return Math.floor((child_index -1) / 2);
  }

  getLeftChildIndex(parent_index) {
    return parent_index * 2 + 1;
  }

  getRightChildIndex(parent_index) {
    return parent_index * 2 + 2;
  }

  getLeftChild(parent_index) {
    const right_index = this.getLeftChildIndex(parent_index);
    return this.container[right_index] ?
      this.container[right_index] :
      null
  }

  getRightChild(parent_index) {
    const left_index = this.getRightChildIndex(parent_index);
    return this.container[left_index] ?
      this.container[left_index] :
      null
  }

  getParent(child_index) {
    const parent_index = this.getParentIndex(child_index)
    return this.container[parent_index] ?
      this.container[parent_index] :
      null
  }

  hasParent(child_index) {
    const parent = this.container[this.getParentIndex(child_index)];
    return parent ? true : false;
  }

  hasLeftChild(parent_index) {
    const left_child = this.container[this.getLeftChildIndex(parent_index)];
    return left_child ? true : false;
  }

  hasRightChild(parent_index) {
    const right_child = this.container[this.getRightChildIndex(parent_index)];
    return right_child ? true : false;
  }

  swap(a_index, b_index) {
    let temp = this.container[a_index];
    this.container[a_index] = this.container[b_index];
    this.container[b_index] = temp;
  }
}

module.exports = minHeap2