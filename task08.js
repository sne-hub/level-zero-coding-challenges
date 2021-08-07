function timeConveter(number){
    var hours =parseInt(number / 60); 
    var minutes = number % 60; 
    if ( hours == 1 || minutes ==1) {
        console.log( hours + "hour" + " : " + minutes + " minute");
        }else{
            console.log( hours + " hours" + " : " + minutes + " minutes");
        }
        
    
}
timeConveter(61);
