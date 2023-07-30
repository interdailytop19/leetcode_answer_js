/**
 * Initialize your data structure here.
 */


 // https://www.youtube.com/watch?v=pkaooVBexeU
 var Trie = function() {
  this.root = new Node();
};

function Node(value='', isWord=false) {
  this.value = value;
  this.children = {};
  this.isWord = isWord
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for(let i = 0; i < word.length; i++) {
    if(!curr.children[word[i]]) {
      curr.children[word[i]] = new Node(word[i]);
    }
    curr = curr.children[word[i]];
  }
  curr.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this.root
  for(let i = 0; i < word.length; i++) {
    if(!curr.children[word[i]]) {
      return false;
    }
    curr = curr.children[word[i]];
  }
  
  return curr.isWord ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root
  for(let i = 0; i < prefix.length; i++) {
    if(!curr.children[prefix[i]]) {
      return false;
    }
    curr = curr.children[prefix[i]];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */