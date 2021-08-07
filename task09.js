function vowelFinder(str){
    var regex = /[aeiou]/g;
    var result = str.match(regex);
    var unique = [...new Set(result)];
    console.log(unique);
}
vowelFinder('Umuuzi');
