function commonChar(str1,str2){
    var present = [];
    for( var i = 0;i<str1.length;i++){
        for(var j =0 ;j<str2.length;j++){
            if(str1[i]===str2[j]){
            present += str1[i];
            }
        }
    }
    const vowels = [],
      consonants = [];
    for(const c of present){
        if('aeiou'.includes(c)){
            vowels.push(c);
        }else{
            consonants.push(c);
        }  

    }
    const result = vowels.concat(consonants);
    var unique = [...new Set(result)];
    console.log(unique.toString());
}
commonChar("hoouse","compueterss");
