function commonCharCount(string1, string2) {
  let s1Chars = string1.split('');
  let s2Chars = string2.split('');
  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);
  let total = 0;
  let common_Characters = [];
  console.log(s1CharCount);
  console.log(s2CharCount);
  
  for (const prop in s1CharCount) {
    if(s2CharCount.hasOwnProperty(prop)) {
      common_Characters.push(prop);
      if (s2CharCount[prop] < s1CharCount[prop]) {
        console.log(s2CharCount[prop], s1CharCount[prop])
        total += s2CharCount[prop];
      } else {
        total += s1CharCount[prop];
      }
    }
  }
  return {total, common_Characters};
}

function getCharList(chars) {
  const wordCount = {};
  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[chars[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }
  return wordCount;
}
console.log(commonCharCount('simultaneous', 'available'));

