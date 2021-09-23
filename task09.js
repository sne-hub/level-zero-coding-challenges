const vowelFinder = function (str) {
    const vowels = [];
    let s = str.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if ('aeiou'.includes(s[i])) {
            vowels.push(s[i]);
        } else {
            continue;
        }
    }
    let unique = [...new Set(vowels)];
    console.log(unique.join());
}
vowelFinder('Umuzi');
