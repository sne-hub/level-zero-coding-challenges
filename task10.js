function commonChar(str1,str2){
    let present = [];
    for( let i = 0;i<str1.length;i++){
        for(let j =0 ;j<str2.length;j++){
            if(str1[i]===str2[j]){
            present += str1[i];
            }
        }
    }
    const vowels = []
      consonants = [];
    for (const c of present){
        if( 'aeiou'.includes(c)){
            vowels.push(c);
        }else{
            consonants.push(c)
        }
        
    
    }
    let result = vowels.concat(consonants);
    let unique = [...new Set(result)];
    console.log(unique.toString());
}  
commonChar("house","computers");
