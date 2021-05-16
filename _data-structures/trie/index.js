const Trie = require('./Trie');

let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
console.log('**Creating Trie with values:', keys.join(', '));
let trieInstance = new Trie();

for (let i = 0; i < keys.length; i++) {
  trieInstance.insert(keys[i]);
}

console.log('**Output: created trie:\n', JSON.stringify(trieInstance));

console.log(`**Output: Search for word "answer": ${trieInstance.search('answer')}`);
console.log(`**Output: Search for word "answers": ${trieInstance.search('answers')}`);

trieInstance.delete('there');
console.log('**Output: deleted word "there"\n', JSON.stringify(trieInstance));

console.log(`**Output: Search for word "there": ${trieInstance.search('there')}`);
