let arr = [];
let arrTwo = arr.map(arr => arr.join(''));

const wordSearch = (letters, word) => {
  // Check horizonatal axis for matching words
  const horizontalJoin = letters.map(ls => ls.join(''));
  if (horizontalJoin.includes(word)) {
    return horizontalJoin.includes(word);
  } if (!horizontalJoin.includes(word)) {
    return horizontalJoin.includes(word);
  }
  // Convert letters on vertical axis in to a new string
  for (let i = 0; i < letters.length; i++) {
    for (let z = 0; z < letters[i].length; z++) {
      if (!Array.isArray(arr[i])) {
        arr[i] = [];
        arr[i].push(letters[z][i]);
      } else {
        arr[i].push(letters[z][i]);
      }
    }
  }
  // Check vertical axis for matching words
  if (arrTwo.includes(word)) {
    return (arrTwo.includes(word));
  } if (!arrTwo.includes(word)) {
    return arrTwo.includes(word);
  }
}; console.log(wordSearch([['a', 'b', 'w'],
  ['b', 'e', 'e'],
  ['b', 'e', 'n']], 'bee'
));

module.exports = wordSearch;