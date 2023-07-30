/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */


// https://youtu.be/hi8xga8nWm4
var suggestedProducts = function(products, searchWord) {
  products.sort();
  const result = [];
  for (let i = 0; i < searchWord.length; i++) {
    const prefix = searchWord.substring(0, i + 1);
    const low = lowerBound(products, prefix);
    const high = lowerBound(products, prefix+'~');
    if(low === high) {
      break;
    }
    result.push(products.slice(low, Math.min(low + 3, high)));
  }

  while(result.length != searchWord.length) {
    result.push([]);
  }
  return result;
}

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length-1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// =====================================================================
// =====================================================================
// =====================================================================
// =====================================================================

// trie method

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  products.sort();
  let trie = new Trie();
  let result = [];
  
  for(let i = 0; i < products.length; i++) {
    trie.insert(products[i]);
  }
  
  for(let i = 0; i < searchWord.length; i++) {
    result.push(trie.getSuggestion(searchWord.substring(0, i+1)));
  }
  return result;
};

var Trie = function() {
  this.root = new Node();
};

function Node(value='', isWord=false) {
  this.value = value;
  this.children = {};
  this.isWord = isWord;
  this.suggestion = [];
}

Trie.prototype.insert = function(word) {
  let curr = this.root;
  for(let i = 0; i < word.length; i++) {
    if(!curr.children[word[i]]) {
      curr.children[word[i]] = new Node(word[i]);
    }
    curr = curr.children[word[i]];
    curr.suggestion.push(word);
  }
  curr.isWord = true;
};

Trie.prototype.getSuggestion = function(prefix) {
  let curr = this.root;
  let result = [];
  for(let i = 0; i < prefix.length; i++) {
    if(!curr.children[prefix[i]]) {
      return [];
    }
    curr = curr.children[prefix[i]];
  }
  return curr.suggestion.slice(0, 3);
};