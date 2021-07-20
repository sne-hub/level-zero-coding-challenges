function vowelFinder(str)
{
    var vow = [ 'a', 'e', 'i','o' ,'u', 'A', 'E', 'I', 'O', 'U'];
    var result = " ";
    for(var i = 0; i < vow.length; i++ )
    {
        if(str.includes(vow[i])) 
        {
            result += vow[i];

        }
    }
    return result;
}
var str = "TaugA"
console.log(vowelFinder(str));
