function convertString(s,t){
  let word = ''
  let tIndex = 0  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]){
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true
      }
    }
  }

  return false
}

console.log(convertString('ajavaifjsgjcgjruipt', 'javascript'))
console.log(convertString('javaifjsgjcgjruip', 'javascript'))