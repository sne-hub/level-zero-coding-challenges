const vowelFinder = function (str) {
  const vowels = [];
  const s = str.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if ('aeiou'.includes(s[i])) {
      vowels.push(s[i]);
    } else {
      continue;
    }
  }
  const unique = [...new Set(vowels)];
  console.log('vowels : ', unique.join());
};
vowelFinder('Umuzi');
