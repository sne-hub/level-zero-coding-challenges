function timeConveter(number){
    var hours = parseInt(number / 60); // converts floats to integers
    var minutes = number % 60; 
    if ( hours > 1 ) {
        console.log( hours + "hours" + " : " + minutes + " minutes");
        } else {
            console.log( hours + " hour" + " : " + minutes + " minutes");
        }
        
    
}
timeConveter(60);
