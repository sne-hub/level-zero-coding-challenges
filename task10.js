function commonChar(str1, str2) {
  let present = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        present += str1[i];
      }
    }
  }
  const vowels = [];
  const consonants = [];
  for (const c of present) {
    if ('aeiou'.includes(c)) {
      vowels.push(c);
    } else {
      consonants.push(c);
    }
  }
  const result = vowels.concat(consonants);
  const unique = [...new Set(result)];
  console.log('common characters are : ', unique.join(' , '));
}
commonChar('house', 'computers');
