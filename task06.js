function maxNumber( a,b,c) {
    if (( a > b && a > c) || (c===b && a > b) || ( a ===b && a > c)){
        return a;
    } else if (( b > a && b > c) || (c === a && b> c) || (b ===c && b > a)) {
        return  b;
    }else if (( c > a && c > b) || ( a ===b && c > a) || (a ===c && c > b)){
        return c;
    }else{
        return c;
    } 
     
}
console.log(maxNumber(1,-6,1));
