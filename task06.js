function maxNumber( a,b,c) {
    if ( a > b && a > c) {
        return "a";
    } else if ( b > a && b > c) {
        return  "b";
        } else {
            return  "c";
        } 
     
}
console.log(maxNumber( 1,4,6));
