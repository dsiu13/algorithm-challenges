// Implement an autocomplete system.
// That is, given a query string s and a set of all possible query strings,
// return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings
// [dog, deer, deal], return [deer, deal].
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
// Radix Trie

function autocomplete(arr, query){
  let qLength = query.length
  let ans = [];
  arr.map(x => {
    if(x.slice(0, qLength) === query){
      ans.push(x)
    }
  })
   return ans
}

autocomplete(['dog', 'deer', 'deal', 'dead','dance','need','bed'], 'de')

// class node
// hashmap <char, node> children
// boolean complete word

// class for node
// every node contains any subsequent letter which will be a key in children
// value represents the letter of the current node
class PrefixTreeNode {
  constructor(value) {
    this.children = {}
    this.endWord = null;
    this.value = value;
  }
}


// Our addWord method essentially looks at each character in the string and
// checks to see if that node has been created yet.
// If not, we create a node for that character.
// Then at the end of the string, we set the endWord property.
class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }

  addWord(string) {
    const addWordHelper = (node, str) => {
      if (!node.children[str[0]]) {
        node.children[str[0]] = new PrefixTreeNode(str[0]);
        if (str.length === 1) {

          node.children[str[0]].endWord = 1;
        }
      } else {

      }
      if (str.length > 1) {
        addWordHelper(node.children[str[0]], str.slice(1));
      }
    };
    addWordHelper(this, string);
  }

  predictWord(string) {
      var getRemainingTree = function(string, tree) {
        var node = tree;
        while (string) {
          node = node.children[string[0]];
          string = string.substr(1);
        }
        return node;
      };

      var allWords = [];

      var allWordsHelper = function(stringSoFar, tree) {
        for (let k in tree.children) {
          const child = tree.children[k]
          var newString = stringSoFar + child.value;
          if (child.endWord) {
            allWords.push(newString);
          }
          allWordsHelper(newString, child);
        }
      };

      var remainingTree = getRemainingTree(string, this);
      if (remainingTree) {
        allWordsHelper(string, remainingTree);
      }

      return allWords;
    }

    logAllWords() {
      console.log('------ ALL WORDS IN PREFIX TREE -----------')
      console.log(this.predictWord(''));
    }
}
