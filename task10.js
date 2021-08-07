function commonChar(str1,str2)
{
    var result = ' ';
    for (var i = 0; i < str1.length; i++){
        for (var j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]) {
                result = str1[i]
                console.log(result);
            }
            

        }

    }
    
}
var str1 = 'hoOuse' , str2 = 'computers'
commonChar(str1,str2);
