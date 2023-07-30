 // priority 0 is the highest priority

class PriorityQueue {
  constructor() {
    this.container = [];
    this.priority = new Map();
  }

  add(item, priority=0) {
    if(!item) {
      throw new Error('no item');
    }
    this.priority.set(item, priority);
    this.container.push(item);
    this.heapifyUp();
  }

  poll() {
    if(!this.container.length) {
      return null;
    }

    if(this.container.length === 1) {
      return this.container.pop();
    }

    const item = this.container[0]
    this.container[0] = this.container.pop();
    this.heapifyDown();
    return item;
  }

  peek() {
    return this.container[0] ? this.container[0] : null
  }

  find(item) {
    for(let i = 0; i < this.container.length; i++) {
      if(this.container[i] === item) {
        return i;
      }
    }
  }

  remove(item) {
    const index = this.find(item);
    if(!index) {
      return null;
    }

    const result = this.container[index];

    this.swap(index, this.container.length -1);
    this.container.pop();

    if(this.hasParent(index) && 
      this.priority.get(this.container[index] > this.priority.get(this.container[this.getParentIndex(index)])
    )) {
      this.heapifyDown(index);
    } else {
      this.heapifyUp(index);
    }
    return result;
  }

  heapifyUp(custom_index) {
    let current_index = custom_index || this.container.length - 1;

    while(this.hasParent(current_index)) {
      const parent_index = this.getParentIndex(current_index);
      const current_priority = this.priority.get(this.container[current_index]);
      const parent_priority = this.priority.get(this.container[parent_index]);
      if(current_priority > parent_priority) {
        break;
      }
      this.swap(current_index, parent_index);
      current_index = parent_index
    }
  }
  
  heapifyDown(custom_index) {
    let current_index = custom_index || 0;
    
    while(this.hasLeftChild(current_index)) {
      let next_index;
      const right_child_index = this.getRightChildIndex(current_index);
      const left_child_index = this.getLeftChildIndex(current_index);
      const right_priority = this.priority.get(this.container[right_child_index]);
      const left_priority = this.priority.get(this.container[left_child_index]);
      if(right_priority < left_priority) {
        next_index = right_child_index;
      } else {
        next_index = left_child_index;
      }
      
      const current_priority = this.priority.get(this.container[current_index]);
      if(current_priority < this.priority.get(this.container[next_index])) {
        break;
      }

      this.swap(current_index, next_index);
      current_index = next_index;
    }
  }

  getParentIndex(child_index) {
    return Math.floor((child_index -1) / 2);
  }

  getParent(child_index) {
    return this.container[child_index] ? this.container[child_index] : null;
  }

  hasParent(child_index) {
    const parent_index = this.getParentIndex(child_index);
    return this.container[parent_index] ? true : false;
  }

  getLeftChildIndex(parent_index) {
    return (parent_index * 2) + 1;
  }

  getLeftChild(parent_index) {
    const left_index = this.getLeftChildIndex(parent_index);
    return this.container[left_index] ? this.container[left_index] : null;
  }

  hasLeftChild(parent_index) {
    const left_index = this.getLeftChildIndex(parent_index);
    return this.container[left_index] ? true : false;
  }

  getRightChildIndex(parent_index) {
    return (parent_index * 2) + 2;
  }

  getRigthChild(parent_index) {
    const right_index = this.getRightChildIndex(parent_index);
    return this.container[right_index] ? this.container[right_index] : null;
  }

  hasRigthChild(parent_index) {
    const right_index = this.getRightChildIndex(parent_index);
    return this.container[right_index] ? true : false;
  }

  swap(a_index, b_index) {
    const temp = this.container[a_index];
    this.container[a_index] = this.container[b_index];
    this.container[b_index] = temp;
  }

  toString() {
    return this.container.toString();
  }

  changePriority() {}
}

module.exports = PriorityQueue;